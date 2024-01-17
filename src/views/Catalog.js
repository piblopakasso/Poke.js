import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useQuery } from "@tanstack/react-query";

import { getPokemonFormData, getTypeData } from "../fetchFunctions";
import {
  formatId,
  formatName,
  findObjectValue,
  capitalizeFirstLetter,
} from "../utilityFunctions";
import LoadingCircle from "../components/LoadingCircle";

function Catalog({ pokemonType }) {
  const [catalogItemsCount, setCatalogItemsCount] = useState(0);
  const [savedPokemonCatalog, setSavedPokemonCatalog] = useState([]);

  const { data: pokemonList, isError: isListError } = useQuery({
    queryFn: async function createPokemonList() {
      return getPokemonsOfType(pokemonType);
    },
    queryKey: ["pokemonList", { pokemonType }],
  });

  const {
    data: pokemonCatalog,
    isLoading: isCatalogLoading,
    isError: isCatalogError,
    isSuccess: isCatalogSuccess,
  } = useQuery({
    queryFn: async function createPokemonCatalag() {
      const promises = pokemonList
        .slice(catalogItemsCount, catalogItemsCount + 12)
        .map((item) => getPokemonFormData(item));

      const pokemons = await Promise.all(promises);

      return pokemons.map((pokemon) => ({
        formName: formatName(pokemon.name),
        specieName: formatName(pokemon.species.name),
        formId: formatId(pokemon.id.toString()),
        image: pokemon.sprites["front_default"],
        types: findObjectValue(pokemon.types, "type", "name"),
      }));
    },
    queryKey: ["pokemonCatalog", { pokemonList, catalogItemsCount }],
  });

  useEffect(() => {
    if (isCatalogSuccess) {
      setSavedPokemonCatalog(savedPokemonCatalog.concat(pokemonCatalog));
    }
  }, [pokemonCatalog, isCatalogSuccess]);

  useEffect(() => {
    setSavedPokemonCatalog([]);
    setCatalogItemsCount(0);
  }, [pokemonType]);

  async function getPokemonsOfType(type) {
    const data = await getTypeData(type);
    let list = [];

    for (let item of data.pokemon) {
      list.push(item.pokemon.name);
    }

    return list;
  }

  function showMorePokemons() {
    if (catalogItemsCount < pokemonList.length) {
      setCatalogItemsCount(catalogItemsCount + 12);
    } else {
      setCatalogItemsCount(pokemonList.length);
    }
  }

  return (
    <>
      <PokemonCatalogWrapper>
        <SortButton>Sort</SortButton>
        <PokemonCatalog>
          {savedPokemonCatalog.map((content, index) => (
            <PokemonPreview key={index}>
              <PokemonPreviewImageWrapper
                $borderColor={colors[savedPokemonCatalog.type]}
              >
                <PokemonPreviewImage src={content.image} alt="Pokemon Image" />
              </PokemonPreviewImageWrapper>

              <PokemonPreviewID>#{content.formId}</PokemonPreviewID>
              <PokemonPreviewName $textColor={colors[savedPokemonCatalog.type]}>
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

        {isCatalogLoading && <LoadingCircle />}

        <ShowMoreButton
          disabled={
            !isCatalogSuccess || catalogItemsCount === pokemonList.length
          }
          onClick={showMorePokemons}
        >
          Show more Pokemons!
        </ShowMoreButton>
      </PokemonCatalogWrapper>
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

  &:disabled {
    color: darkgray;
    background-color: gainsboro;
    cursor: initial;
  }
`;
