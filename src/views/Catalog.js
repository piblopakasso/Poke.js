import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

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

function getFormattedName(name) {
  return name.toUpperCase();
}

function getFormattedId(id) {
  if (id.length > 4) {
    return `#${id}`;
  } else {
    const str = `#000${id}`;

    return str.slice(-4);
  }
}

function Catalog({ pokemonType }) {
  const [pokemonCatalog, setPokemonCatalog] = useState({
    touched: false,
  });

  const [pokemonCatalogList, setPokemonCatalogList] = useState({});
  const [pokemonCatalogIterator, setPokemonCatalogIterator] = useState(0);

  useEffect(() => {
    createCatalog(pokemonType);
  }, [pokemonType]);

  async function getPokemonStats(value) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
    return await response.json();
  }

  async function getTypePokemons(type) {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    const info = await response.json();
    let list = [];

    for (let key of info.pokemon) {
      list.push(key.pokemon.name);
    }

    setPokemonCatalog({
      touched: true,
      type: type,
      pokemons: list,
    });

    setPokemonCatalogList({});

    return list;
  }

  async function createPokemonCardPreview(pokemonName) {
    const previewData = await getPokemonStats(pokemonName);

    setPokemonCatalogList((prevState) => ({
      ...prevState,
      [pokemonName]: {
        formName: getFormattedName(previewData.name),
        specieName: getFormattedName(previewData.species.name),
        formId: getFormattedId(previewData.id.toString()),
        image: previewData.sprites["front_default"],
        types: getObjectValue(previewData.types, "type", "name"),
      },
    }));
  }

  async function showPokemonPreviews(arr, iterator) {
    // to show 12 preview pokemon cards
    if (iterator < arr.length - 12) {
      for (let i = iterator; i < iterator + 12; i++) {
        await createPokemonCardPreview(arr[i]);
      }
      setPokemonCatalogIterator(iterator + 12);
    } else {
      for (let i = iterator; i < iterator + (arr.length - iterator); i++) {
        await createPokemonCardPreview(arr[i]);
      }
      setPokemonCatalogIterator(iterator + (arr.length - iterator));
    }
  }

  async function createCatalog(type) {
    if (type != null) {
      const pokemonList = await getTypePokemons(type);
      await showPokemonPreviews(pokemonList, 0);
    }
  }

  return (
    <>
      {pokemonCatalog.touched && (
        <PokemonCatalogWrapper>
          <SortButton>Sort</SortButton>
          <PokemonCatalog>
            {Object.values(pokemonCatalogList).map((content, index) => (
              <PokemonPreview key={index}>
                <PokemonPreviewImageWrapper
                  $borderColor={colors[pokemonCatalog.type]}
                >
                  <PokemonPreviewImage
                    src={content.image}
                    alt="Pokemon Image"
                  />
                </PokemonPreviewImageWrapper>

                <PokemonPreviewID>#{content.formId}</PokemonPreviewID>
                <PokemonPreviewName $textColor={colors[pokemonCatalog.type]}>
                  {capitalizeFirstLetter(content.formName)}
                </PokemonPreviewName>
                <PokemonPreviewTypesWrapper>
                  {content.types.map((text, index) => (
                    <PokemonPreviewTypes
                      $backgroundColor={colors[text]}
                      key={index}
                    >
                      {capitalizeFirstLetter(text)}
                    </PokemonPreviewTypes>
                  ))}
                </PokemonPreviewTypesWrapper>
              </PokemonPreview>
            ))}
          </PokemonCatalog>

          <ShowMoreButton
            onClick={() =>
              showPokemonPreviews(
                pokemonCatalog.pokemons,
                pokemonCatalogIterator
              )
            }
          >
            Show more Pokemons!
          </ShowMoreButton>
        </PokemonCatalogWrapper>
      )}
    </>
  );
}

export default Catalog;

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

const PokemonCatalogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
`;

const SortButton = styled.button`
  width: max-content;
  padding: 5px 5px 5px 7px;
  margin: 20px 0 10px 10px;
  border-radius: 8px;
  cursor: pointer;
  border: solid gainsboro 1px;

  &:after {
    content: "\\25BC";
    color: gray;
    margin-left: 15px;
    font-size: 12px;
  }
`;

const PokemonCatalog = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PokemonPreview = styled.div`
  width: 180px;
  text-align: center;
  margin: 10px;
  border-radius: 12px;
  background-color: ${mainAccentColor};
  font-size: 14px;
  cursor: pointer;
  outline: solid ${mainAccentColor} 4px;
  outline-offset: -4px;
  transition: 0.1s outline-offset ease-in-out;

  &:hover {
    outline-offset: -1px;
  }
`;

const PokemonPreviewImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid ${(props) => props.$borderColor} 5px;
  border-radius: 50%;
  background-color: ${mainBackgroundColor};
  width: 100px;
  height: 100px;
  margin: 15px auto 10px;
`;

const PokemonPreviewImage = styled.img`
  border-radius: 50%;
`;

const PokemonPreviewID = styled.div`
  color: white;
  font-weight: bold;
`;

const PokemonPreviewName = styled.div`
  color: white;
  font-weight: bold;
  margin: 5px 10px 0 10px;
`;

const PokemonPreviewTypesWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 15px 15px 15px;
`;

const PokemonPreviewTypes = styled.div`
  padding: 8px;
  margin: 0 5px 0 5px;
  border-radius: 10px;
  background-color: ${(props) => props.$backgroundColor};
  color: white;

  ${(props) =>
    (props.$backgroundColor === colors.flying ||
      props.$backgroundColor === colors.ice ||
      props.$backgroundColor === colors.poison ||
      props.$backgroundColor === colors.electric) &&
    css`
      color: ${mainAccentColor};
    `};
`;

const ShowMoreButton = styled.button`
  width: max-content;
  font-size: 14px;
  padding: 10px 13px 10px 13px;
  margin: 20px auto 40px;
  border-radius: 8px;
  cursor: pointer;
  border: solid gainsboro 1px;

  &:hover {
    background-color: gainsboro;
  }
`;
