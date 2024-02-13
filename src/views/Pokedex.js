import React, { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { useQuery } from "@tanstack/react-query";

import { getPokemonSpecieData, getPokemonFormData } from "../fetchFunctions";
import {
  formatId,
  formatName,
  findObjectValue,
  removeDuplicate,
  capitalizeFirstLetter,
} from "../utilityFunctions";
import PokemonAbility from "../components/PokemonAbility";
import LoadingCircle from "../components/LoadingCircle";
import { useParams, useSearchParams } from "react-router-dom";

export default function Pokedex() {
  const { query } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedForm, setSelectedForm] = useState(query);
  const [formsListShown, setFormsListShown] = useState(false);
  const [abilityDescription, setAbilityDescription] = useState({
    shown: false,
    text: null,
  });

  const {
    data: pokemonData,
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryFn: async function createPokedexCard() {
      const specie = await getPokemonSpecieData(query);
      const forms = await getPokemonFormsData(specie.varieties);

      return {
        id: formatId(specie.id),
        name: formatName(specie.name),
        description: findPokemonDescription(specie),
        defaultForm: specie.varieties[0].pokemon.name,
        forms: forms,
      };
    },
    queryKey: ["pokemonData", { query }],
  });

  useEffect(() => {
    if (isSuccess) {
      resetModals();
      handleFormChange();
    }
  }, [isSuccess, pokemonData, selectedForm]);

  async function getPokemonFormsData(varieties) {
    const promises = varieties.map((item) =>
      getPokemonFormData(item.pokemon.name)
    );
    const forms = await Promise.all(promises);

    return forms.reduce((obj, form) => {
      return {
        ...obj,
        [form.name]: {
          imageFront: form.sprites["front_default"],
          imageBack: form.sprites["back_default"],
          types: findObjectValue(form.types, "type", "name"),
          height: form.height,
          weight: form.weight,
          abilities: removeDuplicate(
            findObjectValue(form.abilities, "ability", "name")
          ),
          stats: findObjectValue(form.stats, "base_stat"),
        },
      };
    }, {});
  }

  function findPokemonDescription(object) {
    let description = "Lack of information. Research in progress.";
    for (let key of object.flavor_text_entries) {
      if (key.language.name === "en") {
        description = key.flavor_text;
        //break; without break it will get the last (newest) english description
      }
    }

    return description;
  }

  function resetModals() {
    setFormsListShown(false);
    setAbilityDescription((prevState) => ({
      ...prevState,
      shown: false,
      text: null,
    }));
  }

  function flipImage(e) {
    const pokemon = pokemonData.forms[selectedForm];
    if (pokemon.imageBack === null) {
      e.target.src = pokemon.imageFront;
    } else if (e.target.src === pokemon.imageFront) {
      e.target.src = pokemon.imageBack;
    } else {
      e.target.src = pokemon.imageFront;
    }
  }

  function changePokemonForm(e) {
    const form = e.target.textContent.toLowerCase();
    if (form === query) {
      setSearchParams();
    } else {
      setSearchParams({ form: form });
    }
    setSelectedForm(form);
  }

  function handleFormChange() {
    const form = searchParams.get("form");
    if (form !== null) {
      setSelectedForm(form);
    } else {
      setSelectedForm(query);
    }
  }

  function togglePokemonForms() {
    if (formsListShown === true) {
      setFormsListShown(false);
    } else {
      setFormsListShown(true);
    }
  }

  function hideAbilityDescription() {
    setAbilityDescription((prevState) => ({
      ...prevState,
      shown: false,
      name: null,
    }));
  }

  function showAbilityDescription(e) {
    setAbilityDescription((prevState) => ({
      ...prevState,
      shown: true,
      name: e.target.textContent.toLowerCase(),
    }));
  }

  // function previousPokemon(id) {
  //   let number = parseInt(id);
  //   setPokemonForm("default");
  //
  //   if (number === 1) {
  //     setPokemonName(1010);
  //   } else {
  //     setPokemonName(number - 1);
  //   }
  // }
  //
  // function nextPokemon(id) {
  //   let number = parseInt(id);
  //   setPokemonForm("default");
  //
  //   if (number === 1010) {
  //     setPokemonName(1);
  //   } else {
  //     setPokemonName(number + 1);
  //   }
  // }

  if (isLoading) {
    return <LoadingCircle />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <IdWrapper
        $backgroundColor={colors[pokemonData.forms[selectedForm]?.types[0]]}
      >
        <PokemonId>#{pokemonData.id}</PokemonId>

        {/*<LeftArrowWrapper onClick={() => previousPokemon(pokemonData.id)}>*/}
        {/*  <LeftArrow>&lt;..</LeftArrow>*/}
        {/*</LeftArrowWrapper>*/}
        {/*<RightArrowWrapper onClick={() => nextPokemon(pokemonData.id)}>*/}
        {/*  <RightArrow>..&gt;</RightArrow>*/}
        {/*</RightArrowWrapper>*/}
      </IdWrapper>

      <PokemonInfo>
        <ImageWrapper>
          <PokemonImage
            src={pokemonData.forms[selectedForm]?.imageFront}
            alt="Pokemon image"
            onClick={flipImage}
          />
        </ImageWrapper>

        <PokemonName>{pokemonData.name}</PokemonName>

        {Object.keys(pokemonData.forms).length > 1 && (
          <PokemonFormsWrapper>
            <SelectedPokemonForm onClick={togglePokemonForms}>
              {capitalizeFirstLetter(selectedForm)}
            </SelectedPokemonForm>
            <PokemonFormsList $shown={formsListShown}>
              {Object.keys(pokemonData.forms).map((text, index) => (
                <PokemonForm
                  key={index}
                  onClick={changePokemonForm}
                  $color={colors[pokemonData.forms[selectedForm]?.types[0]]}
                >
                  {capitalizeFirstLetter(text)}
                </PokemonForm>
              ))}
            </PokemonFormsList>
          </PokemonFormsWrapper>
        )}

        <GeneralInfo
          $backgroundColor={colors[pokemonData.forms[selectedForm]?.types[0]]}
        >
          <DescriptionWrapper>
            Description
            <PokemonDescription
              $backgroundColor={
                colors[pokemonData.forms[selectedForm]?.types[0]]
              }
            >
              {pokemonData.description}
            </PokemonDescription>
          </DescriptionWrapper>
          <HeightWrapper>
            Height
            <PokemonHeight
              $backgroundColor={
                colors[pokemonData.forms[selectedForm]?.types[0]]
              }
            >
              {pokemonData.forms[selectedForm]?.height / 10} m
            </PokemonHeight>
          </HeightWrapper>
          <WeightWrapper>
            Weight
            <PokemonWeight
              $backgroundColor={
                colors[pokemonData.forms[selectedForm]?.types[0]]
              }
            >
              {pokemonData.forms[selectedForm]?.weight / 10} kg
            </PokemonWeight>
          </WeightWrapper>
        </GeneralInfo>

        <TypesWrapper className="types_wrapper">
          <h4>Types</h4>
          {pokemonData.forms[selectedForm]?.types.map((text, index) => (
            <PokemonTypes $backgroundColor={colors[text]} key={index}>
              {capitalizeFirstLetter(text)}
            </PokemonTypes>
          ))}
        </TypesWrapper>

        <AbilitiesWrapper className="abilities_wrapper">
          <h4>Abilities</h4>
          {pokemonData.forms[selectedForm]?.abilities.map((text, index) => (
            <PokemonAbilities
              $touched={abilityDescription.shown}
              key={index}
              onClick={(e) => showAbilityDescription(e)}
            >
              {capitalizeFirstLetter(text)}
            </PokemonAbilities>
          ))}
          {abilityDescription.shown && (
            <PokemonAbility
              abilityName={abilityDescription.name}
              hideDescription={hideAbilityDescription}
            />
          )}
        </AbilitiesWrapper>

        <StatsWrapper>
          Stats
          <StatColumnsWrapper>
            {pokemonData.forms[selectedForm]?.stats.map((item, index) => (
              <StatColumnWrapper key={index}>
                <StatColumn
                  $backgroundColor={
                    colors[pokemonData.forms[selectedForm]?.types[0]]
                  }
                  $height={`${item / 2.5}%`}
                />
              </StatColumnWrapper>
            ))}
          </StatColumnsWrapper>
          <StatsNameWrapper>
            <StatName>HP</StatName>
            <StatName>Attack</StatName>
            <StatName>Defense</StatName>
            <StatName>Special Attack</StatName>
            <StatName>Special Defense</StatName>
            <StatName>Speed</StatName>
          </StatsNameWrapper>
        </StatsWrapper>
      </PokemonInfo>
    </>
  );
}

const mainBackgroundColor = "#F5F5F5";
const mainAccentColor = "#282c34";
const additionalAccentColor = "#dcdcdc";

const colors = {
  normal: "#bca38f",
  fighting: "#fa8072",
  flying: "#9ee1e0",
  poison: "#9bc51a",
  ground: "#b67d37",
  rock: "#3a3736",
  bug: "#449d31",
  steel: "#8d9d9f",
  ghost: "#896fb4",
  fire: "#ff4c4c",
  water: "#2fadd3",
  grass: "#8fbc8f",
  electric: "#f1c91f",
  psychic: "#c553b4",
  ice: "#cddade",
  dragon: "#ea7638",
  dark: "#29314a",
  fairy: "#e8a8dd",
  shadow: "#542693",
  unknown: "#17ccad",
};

const IdWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 160px;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: white;
  background-color: ${(props) => props.$backgroundColor};
  border-bottom: solid ${mainAccentColor} 10px;
`;

const PokemonId = styled.div`
  font-size: 160px;
  color: ${mainBackgroundColor};
  opacity: 0.33;
`;

const LeftArrowWrapper = styled.div`
  position: absolute;
  left: -5%;
  top: 0;
  height: 100%;
  width: 10%;
  user-select: none;
  transition: left 0.3s ease;
  z-index: 101;

  &:hover {
    left: 0;
  }
`;

const LeftArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
  background-color: ${mainAccentColor};
  cursor: pointer;
`;

const RightArrowWrapper = styled.div`
  position: absolute;
  right: -5%;
  top: 0;
  height: 100%;
  width: 10%;
  user-select: none;
  transition: right 0.3s ease;
  z-index: 101;

  &:hover {
    right: 0;
  }
`;

const RightArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
  float: right;
  background-color: ${mainAccentColor};
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -80px;
  left: calc(50% - 80px);
  margin-bottom: -60px;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: solid ${mainAccentColor} 10px;
  background-color: ${mainBackgroundColor};
`;

const PokemonImage = styled.img`
  width: 100px;
  height: 100px;
`;

const PokemonInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 0 auto;
  color: ${mainAccentColor};
  font-size: 18px;
`;

const PokemonName = styled.h3`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const PokemonFormsWrapper = styled.div`
  position: relative;
  width: max-content;
`;

const SelectedPokemonForm = styled.div`
  padding: 10px 15px 10px 15px;
  border-radius: 12px;
  cursor: pointer;
  color: white;
  background-color: ${mainAccentColor};

  &:after {
    content: "\\25BC";
    color: gray;
    margin-left: 40px;
    font-size: 12px;
  }
`;

const PokemonFormsList = styled.div`
  position: absolute;
  width: 100%;
  border: solid ${additionalAccentColor} 1px;
  border-radius: 12px;
  background-color: ${mainBackgroundColor};
  font-size: 14px;
  z-index: 100;

  ${(props) =>
    !props.$shown &&
    css`
      display: none;
    `};
`;

const PokemonForm = styled.div`
  padding: 10px 15px 10px 15px;
  cursor: pointer;

  &:hover {
    &:after {
      content: "";
      border-left: solid ${(props) => props.$color} 6px;
      margin-left: 8px;
    }
  }
`;

const GeneralInfo = styled.div`
  background-color: ${(props) => props.$backgroundColor};
  border-radius: 12px;
  padding: 20px 30px 20px 30px;
  margin-top: 10px;
`;

const DescriptionWrapper = styled.div`
  height: 80px;
  margin: 10px;
  color: white;
`;

const PokemonDescription = styled.p`
  margin-top: 10px;
  color: ${mainAccentColor};

  ${(props) =>
    (props.$backgroundColor === colors.rock ||
      props.$backgroundColor === colors.dark) &&
    css`
      color: ${additionalAccentColor};
    `};
`;

const HeightWrapper = styled.div`
  float: left;
  margin: 10px 10px 10px 10px;
  color: white;
`;

const PokemonHeight = styled.p`
  margin-top: 10px;
  color: ${mainAccentColor};

  ${(props) =>
    (props.$backgroundColor === colors.rock ||
      props.$backgroundColor === colors.dark) &&
    css`
      color: ${additionalAccentColor};
    `};
`;

const WeightWrapper = styled.div`
  float: right;
  margin: 10px 220px 10px 10px;
  color: white;
`;

const PokemonWeight = styled.p`
  margin-top: 10px;
  color: ${mainAccentColor};

  ${(props) =>
    (props.$backgroundColor === colors.rock ||
      props.$backgroundColor === colors.dark) &&
    css`
      color: ${additionalAccentColor};
    `};
`;

const TypesWrapper = styled.div`
  margin: 20px 20px 0 20px;
`;

const PokemonTypes = styled.div`
  display: inline-block;
  padding: 10px;
  margin: 10px 10px 0 0;
  border-radius: 12px;
  background-color: ${(props) => props.$backgroundColor};

  ${(props) =>
    (props.$backgroundColor === colors.rock ||
      props.$backgroundColor === colors.dark ||
      props.$backgroundColor === colors.psychic) &&
    css`
      color: white;
    `};
`;

const AbilitiesWrapper = styled.div`
  position: relative;
  margin: 20px 20px 0 20px;
`;

const PokemonAbilities = styled.div`
  display: inline-block;
  padding: 10px;
  margin: 10px 10px 0 0;
  border-radius: 12px;
  color: white;
  background-color: ${mainAccentColor};
  cursor: pointer;

  ${(props) =>
    props.$touched &&
    css`
      display: none;
    `};
`;

const StatsWrapper = styled.div`
  margin: 20px 20px 20px 20px;
  width: 560px;
`;

const StatColumnsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

const StatsNameWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StatColumnWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100px;
  border-radius: 5px;
  color: white;
  background-color: #dcdcdc;
`;

const statsAppear = keyframes` //to animate first appearance of stats
  from {
    height: 0;
  }
`;

const StatColumn = styled.div`
  width: 60px;
  height: ${(props) => props.$height};
  border-radius: 5px;
  background-color: ${(props) => props.$backgroundColor};
  transition: height 1s ease;
  animation: 1s ease ${statsAppear};
`;

const StatName = styled.span`
  width: 60px;
  padding-top: 5px;
`;
