import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { useQuery } from "@tanstack/react-query";

import { getPokemonSpecieData, getPokemonFormData } from "../fetchFunctions";
import {
  formatId,
  findValue,
  removeDuplicate,
  capitalizeFirstLetter,
} from "../utilityFunctions";
import {
  mainBackgroundColor,
  mainAccentColor,
  additionalAccentColor,
  colors,
} from "../appColors";
import PokemonAbility from "../components/PokemonAbility";
import LoadingCircle from "../components/LoadingCircle";
import ErrorPage from "./ErrorPage";
import NavigationArrows from "../components/NavigationArrows";
import { useParams, useSearchParams } from "react-router-dom";

async function getPokemonFormsData(arr) {
  const promises = arr.map((item) => getPokemonFormData(item.pokemon.name));
  const forms = await Promise.all(promises);

  return forms.reduce((obj, form) => {
    return {
      ...obj,
      [form.name]: {
        imageFront: form.sprites["front_default"],
        imageBack: form.sprites["back_default"],
        types: findValue(form.types, "type", "name"),
        height: form.height,
        weight: form.weight,
        abilities: removeDuplicate(
          findValue(form.abilities, "ability", "name")
        ),
        stats: findValue(form.stats, "base_stat"),
      },
    };
  }, {});
}

function findPokemonDescription(arr) {
  let description = "Lack of information. Research in progress.";
  for (let item of arr) {
    if (item.language.name === "en") {
      description = item.flavor_text;
    }
  }

  return description;
}

export default function Pokedex() {
  const { query } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedForm, setSelectedForm] = useState(query);
  const [pokemonImage, setPokemonImage] = useState();
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
    queryFn: async function () {
      const specie = await getPokemonSpecieData(query);
      const forms = await getPokemonFormsData(specie.varieties);

      return {
        id: formatId(specie.id),
        name: specie.name.toUpperCase(),
        description: findPokemonDescription(specie.flavor_text_entries),
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
      setPokemonImage(pokemonData.forms[selectedForm]?.imageFront);
    }
  }, [isSuccess, pokemonData, selectedForm]);

  function resetModals() {
    setFormsListShown(false);
    setAbilityDescription((prevState) => ({
      ...prevState,
      shown: false,
      text: null,
    }));
  }

  function flipImage() {
    const pokemon = pokemonData.forms[selectedForm];

    pokemonImage !== pokemon.imageFront || pokemon.imageBack === null
      ? setPokemonImage(pokemon.imageFront)
      : setPokemonImage(pokemon.imageBack);
  }

  function changePokemonForm(e) {
    const form = e.target.textContent.toLowerCase();
    if (form === query || form === pokemonData.defaultForm) {
      setSearchParams();
    } else {
      setSearchParams({ form });
    }
    setSelectedForm(form);
  }

  function handleFormChange() {
    const form = searchParams.get("form");

    form !== null
      ? setSelectedForm(form)
      : setSelectedForm(pokemonData.defaultForm);
  }

  function togglePokemonForms() {
    setFormsListShown((formsListShown) => !formsListShown);
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

  if (isLoading) {
    return <LoadingCircle />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  const currentForm = pokemonData.forms[selectedForm];
  const mainTypeColor = colors[currentForm?.types[0]];

  return (
    <>
      <IdWrapper $backgroundColor={mainTypeColor}>
        <NavigationArrows currentPokemonId={pokemonData.id} />
        <PokemonId>#{pokemonData.id}</PokemonId>
      </IdWrapper>

      <PokemonInfo>
        <ImageWrapper>
          <PokemonImage
            src={pokemonImage}
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
                  $color={mainTypeColor}
                >
                  {capitalizeFirstLetter(text)}
                </PokemonForm>
              ))}
            </PokemonFormsList>
          </PokemonFormsWrapper>
        )}

        <GeneralInfo $backgroundColor={mainTypeColor}>
          <DescriptionWrapper>
            Description
            <PokemonDescription $backgroundColor={mainTypeColor}>
              {pokemonData.description}
            </PokemonDescription>
          </DescriptionWrapper>
          <HeightWrapper>
            Height
            <PokemonHeight $backgroundColor={mainTypeColor}>
              {currentForm?.height / 10} m
            </PokemonHeight>
          </HeightWrapper>
          <WeightWrapper>
            Weight
            <PokemonWeight $backgroundColor={mainTypeColor}>
              {currentForm?.weight / 10} kg
            </PokemonWeight>
          </WeightWrapper>
        </GeneralInfo>

        <TypesWrapper>
          <h4>Types</h4>
          {currentForm?.types.map((text, index) => (
            <PokemonTypes $backgroundColor={colors[text]} key={index}>
              {capitalizeFirstLetter(text)}
            </PokemonTypes>
          ))}
        </TypesWrapper>

        <AbilitiesWrapper>
          <h4>Abilities</h4>
          {currentForm?.abilities.map((text, index) => (
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
            {currentForm?.stats.map((item, index) => (
              <StatColumnWrapper key={index}>
                <StatColumn
                  $backgroundColor={mainTypeColor}
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
