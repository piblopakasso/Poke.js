import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

function getObjectValue(object, value, key) {
  let arr = [];

  for (const item of Object.values(object)) {
    if (key === undefined) {
      arr.push(item[value]);
    } else {
      arr.push(item[value][key]);
    }
  }

  return arr;
}

function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function getFormattedId(id) {
  const str = `#000${id}`;

  return str.slice(-4);
}

function getFormattedName(name) {
  return name.toUpperCase();
}

function removeDuplicate(arr) {
  const set = new Set(arr);
  return Array.from(set);
}

function Pokedex({ pokemonName }) {
  const [pokemonInfo, setPokemonInfo] = useState({
    touched: false,
  });

  const [formOptionsShown, setFormOptionsShown] = useState(false);

  const [abilityDescription, setAbilityDescription] = useState({
    shown: false,
    text: null,
  });

  useEffect(() => {
    createPokedexCard(pokemonName);
  }, [pokemonName]);

  async function getPokemonSpecie(value) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${value}`
    );
    return await response.json();
  }

  async function getPokemonStats(value) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
    return await response.json();
  }

  function findPokemonDescription(object) {
    let description = "Lack of information. Research is ongoing.";
    for (let key of object.flavor_text_entries) {
      if (key.language.name === "en") {
        description = key.flavor_text;
        //break; without break it will get the last (newest) english descriptions
      }
    }

    return description;
  }

  async function createPokedexCard(pokemon) {
    if (pokemon != null) {
      const specie = await getPokemonSpecie(pokemon);
      const stats = await getPokemonStats(specie.varieties[0].pokemon.name);

      setPokemonInfo((prevState) => ({
        ...prevState,
        touched: true,
        id: getFormattedId(specie.id),
        name: getFormattedName(specie.name),
        forms: getObjectValue(specie.varieties, "pokemon", "name"),
        selectedForm: specie.varieties[0].pokemon.name,
        description: findPokemonDescription(specie),
        imageFront: stats.sprites["front_default"],
        imageBack: stats.sprites["back_default"],
        types: getObjectValue(stats.types, "type", "name"),
        height: stats.height,
        weight: stats.weight,
        abilities: removeDuplicate(
          getObjectValue(stats.abilities, "ability", "name")
        ),
        stats: getObjectValue(stats.stats, "base_stat"),
      }));

      setFormOptionsShown(false);
      setAbilityDescription((prevState) => ({
        ...prevState,
        shown: false,
        text: null,
      }));
    }
  }

  function flipImage(e) {
    if (pokemonInfo.imageBack === null) {
      e.target.src = pokemonInfo.imageFront;
    } else if (e.target.src === pokemonInfo.imageFront) {
      e.target.src = pokemonInfo.imageBack;
    } else {
      e.target.src = pokemonInfo.imageFront;
    }
  }

  async function getAbilityInformation(text) {
    const response = await fetch(`https://pokeapi.co/api/v2/ability/${text}`);
    const info = await response.json();
    let abilityInfo = {
      name: null,
      description: "The ability investigation is still in progress.",
    };

    for (let key of info.effect_entries) {
      if (key.language.name === "en") {
        abilityInfo = {
          name: capitalizeFirstLetter(info.name),
          description: key.effect,
        };

        break;
      }
    }

    return abilityInfo;
  }

  function hideAbilityDescription() {
    setAbilityDescription((prevState) => ({
      ...prevState,
      shown: false,
      name: null,
      text: null,
    }));
  }

  async function toggleAbilityDescription(e, text) {
    const abilityInfo = await getAbilityInformation(text);

    setAbilityDescription((prevState) => ({
      ...prevState,
      shown: true,
      name: abilityInfo.name,
      text: abilityInfo.description,
    }));
  }

  async function changePokemonForm(e) {
    const pokemonStats = await getPokemonStats(
      e.target.textContent.toLowerCase()
    );

    setPokemonInfo((prevState) => ({
      ...prevState,
      selectedForm: e.target.textContent,
      imageFront: pokemonStats.sprites["front_default"],
      imageBack: pokemonStats.sprites["back_default"],
      types: getObjectValue(pokemonStats.types, "type", "name"),
      height: pokemonStats.height,
      weight: pokemonStats.weight,
      abilities: removeDuplicate(
        getObjectValue(pokemonStats.abilities, "ability", "name")
      ),
      stats: getObjectValue(pokemonStats.stats, "base_stat"),
    }));
  }

  function togglePokemonForms() {
    if (formOptionsShown === true) {
      setFormOptionsShown(false);
    } else {
      setFormOptionsShown(true);
    }
  }

  function previousPokemon(id) {
    let number = parseInt(id);

    if (number === 1) {
      createPokedexCard("1010");
    } else {
      createPokedexCard(number - 1);
    }
  }

  function nextPokemon(id) {
    let number = parseInt(id);

    if (number === 1010) {
      createPokedexCard("1");
    } else {
      createPokedexCard(number + 1);
    }
  }

  return (
    <>
      {pokemonInfo.touched && (
        <div className="card">
          <IdWrapper $backgroundColor={colors[pokemonInfo.types[0]]}>
            <PokemonId>#{pokemonInfo.id}</PokemonId>

            <LeftArrowWrapper onClick={() => previousPokemon(pokemonInfo.id)}>
              <LeftArrow>&lt;..</LeftArrow>
            </LeftArrowWrapper>
            <RightArrowWrapper onClick={() => nextPokemon(pokemonInfo.id)}>
              <RightArrow>..&gt;</RightArrow>
            </RightArrowWrapper>
          </IdWrapper>

          <PokemonInfo>
            <ImageWrapper>
              <PokemonImage
                src={pokemonInfo.imageFront}
                alt="Pokemon image"
                onClick={flipImage}
              />
            </ImageWrapper>

            <PokemonName>{pokemonInfo.name}</PokemonName>

            {pokemonInfo.forms.length > 1 && (
              <PokemonFormsWrapper>
                <SelectedPokemonForm onClick={togglePokemonForms}>
                  {capitalizeFirstLetter(pokemonInfo.selectedForm)}
                </SelectedPokemonForm>
                <PokemonFormsList $shown={formOptionsShown}>
                  {pokemonInfo.forms.map((text, index) => (
                    <PokemonForm
                      key={index}
                      onClick={changePokemonForm}
                      $color={colors[pokemonInfo.types[0]]}
                    >
                      {capitalizeFirstLetter(text)}
                    </PokemonForm>
                  ))}
                </PokemonFormsList>
              </PokemonFormsWrapper>
            )}

            <GeneralInfo $backgroundColor={colors[pokemonInfo.types[0]]}>
              <DescriptionWrapper>
                Description
                <PokemonDescription
                  $backgroundColor={colors[pokemonInfo.types[0]]}
                >
                  {pokemonInfo.description}
                </PokemonDescription>
              </DescriptionWrapper>

              <HeightWrapper>
                Height
                <PokemonHeight $backgroundColor={colors[pokemonInfo.types[0]]}>
                  {pokemonInfo.height / 10} m
                </PokemonHeight>
              </HeightWrapper>

              <WeightWrapper>
                Weight
                <PokemonWeight $backgroundColor={colors[pokemonInfo.types[0]]}>
                  {pokemonInfo.weight / 10} kg
                </PokemonWeight>
              </WeightWrapper>
            </GeneralInfo>

            <TypesWrapper className="types_wrapper">
              <h4>Types</h4>
              {pokemonInfo.types.map((text, index) => (
                <PokemonTypes $backgroundColor={colors[text]} key={index}>
                  {capitalizeFirstLetter(text)}
                </PokemonTypes>
              ))}
            </TypesWrapper>

            <AbilitiesWrapper className="abilities_wrapper">
              <h4>Abilities</h4>
              {pokemonInfo.abilities.map((text, index) => (
                <PokemonAbilities
                  $touched={abilityDescription.shown}
                  key={index}
                  onClick={(e) => toggleAbilityDescription(e, text)}
                >
                  {capitalizeFirstLetter(text)}
                </PokemonAbilities>
              ))}
              {abilityDescription.shown && (
                <AbilityDescriptionWrapper onClick={hideAbilityDescription}>
                  <AbilityName>{abilityDescription.name}</AbilityName>
                  <AbilityDescription>
                    {abilityDescription.text}
                  </AbilityDescription>
                </AbilityDescriptionWrapper>
              )}
            </AbilitiesWrapper>

            <StatsWrapper>
              Stats
              <StatColumnsWrapper>
                <StatColumnWrapper>
                  <StatColumn
                    $backgroundColor={colors[pokemonInfo.types[0]]}
                    $height={`${pokemonInfo.stats[0] / 2.5}%`}
                  />
                </StatColumnWrapper>
                <StatColumnWrapper>
                  <StatColumn
                    $backgroundColor={colors[pokemonInfo.types[0]]}
                    $height={`${pokemonInfo.stats[1] / 2.5}%`}
                  />
                </StatColumnWrapper>
                <StatColumnWrapper>
                  <StatColumn
                    $backgroundColor={colors[pokemonInfo.types[0]]}
                    $height={`${pokemonInfo.stats[2] / 2.5}%`}
                  />
                </StatColumnWrapper>
                <StatColumnWrapper>
                  <StatColumn
                    $backgroundColor={colors[pokemonInfo.types[0]]}
                    $height={`${pokemonInfo.stats[3] / 2.5}%`}
                  />
                </StatColumnWrapper>
                <StatColumnWrapper>
                  <StatColumn
                    $backgroundColor={colors[pokemonInfo.types[0]]}
                    $height={`${pokemonInfo.stats[4] / 2.5}%`}
                  />
                </StatColumnWrapper>
                <StatColumnWrapper>
                  <StatColumn
                    $backgroundColor={colors[pokemonInfo.types[0]]}
                    $height={`${pokemonInfo.stats[5] / 2.5}%`}
                  />
                </StatColumnWrapper>
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
        </div>
      )}
    </>
  );
}

export default Pokedex;

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

const IdWrapperAppear = keyframes`
  from {
    height: 0;
  }
`;

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
  animation: 1s ease ${IdWrapperAppear};
`;

const PokemonIdAppear = keyframes`
  to {
    opacity: 0.33;
  }
`;

const PokemonId = styled.div`
  font-size: 160px;
  color: ${mainBackgroundColor};
  opacity: 0;
  animation: 0.5s ease 1s forwards ${PokemonIdAppear};
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

const ImageAppear = keyframes`
  to {
    opacity: 1;
  }
`;

const PokemonImage = styled.img`
  width: 100px;
  height: 100px;
  opacity: 0;
  animation: 0.5s ease-out 0.5s forwards ${ImageAppear};
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
      border-left: solid ${(props) => props.$color} 4px;
      margin-left: 5px;
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

const abilityDescriptionAppear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AbilityDescriptionWrapper = styled.div`
  margin-top: 10px;
  padding: 10px;
  border-radius: 12px;
  color: white;
  box-sizing: border-box;
  background-color: ${mainAccentColor};
  cursor: pointer;
  animation: 0.8s ease-in-out forwards ${abilityDescriptionAppear};
`;

const AbilityName = styled.p`
  padding-bottom: 10px;
`;

const AbilityDescription = styled.p`
  padding-bottom: 10px;
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
