import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

import {
  getPokemonFormData,
  getPokemonList,
  getTypeData,
} from "../fetchFunctions";
import {
  formatId,
  findValue,
  capitalizeFirstLetter,
  findSimilarItems,
  formatPokemonListData,
} from "../utilityFunctions";
import { mainBackgroundColor, mainAccentColor, colors } from "../appColors";
import LoadingCircle from "../components/LoadingCircle";
import ErrorPage from "./ErrorPage";
import { useSearchParams, useNavigate } from "react-router-dom";

async function getPokemonsOfType(type) {
  const data = await getTypeData(type);

  return data.pokemon.map((item) => item.pokemon.name);
}

export default function Catalog() {
  const [catalogItemsCount, setCatalogItemsCount] = useState(12);
  const [searchParams] = useSearchParams({
    option: "name",
    query: "",
  });
  const searchOption = searchParams.get("option");
  const searchQuery = searchParams.get("query");
  const navigate = useNavigate();

  const { data: pokemonList, isError: isListError } = useQuery({
    queryFn: async function () {
      if (searchQuery === "") {
        const list = await getPokemonList();
        return list.results.map((item) => item.name);
      } else if (searchOption === "name" && searchQuery !== "") {
        const list = await getPokemonList();
        const formattedData = formatPokemonListData(list);
        return findSimilarItems(searchQuery, formattedData);
      } else if (searchOption === "type") {
        return await getPokemonsOfType(searchQuery);
      }
    },
    queryKey: ["pokemonList", { searchQuery }],
  });

  const {
    data: pokemonCatalog,
    isError: isCatalogError,
    isLoading: isCatalogLoading,
    isFetching: isCatalogFetching,
  } = useQuery({
    queryFn: async function () {
      const promises = pokemonList
        .slice(0, catalogItemsCount)
        .map(getPokemonFormData);

      const pokemons = await Promise.all(promises);

      return pokemons.map((pokemon) => ({
        formName: pokemon.name.toUpperCase(),
        specieName: pokemon.species.name.toUpperCase(),
        formId: formatId(pokemon.id.toString()),
        image: pokemon.sprites["front_default"],
        types: findValue(pokemon.types, "type", "name"),
      }));
    },
    queryKey: ["pokemonCatalog", { pokemonList, catalogItemsCount }],
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    setCatalogItemsCount(12);
  }, [searchQuery]);

  function showMorePokemons() {
    if (catalogItemsCount < pokemonList.length) {
      setCatalogItemsCount(catalogItemsCount + 12);
    } else {
      setCatalogItemsCount(pokemonList.length);
    }
  }

  function handleClick(name, form, id) {
    if (name === form || id.length < 5) {
      navigate(`/pokedex/${name.toLowerCase()}`);
    } else {
      navigate(`/pokedex/${name.toLowerCase()}?form=${form.toLowerCase()}`);
    }
  }

  if (isCatalogLoading) {
    return <LoadingCircle />;
  }

  if (isListError || isCatalogError) {
    return <ErrorPage />;
  }

  return (
    <PokemonCatalogWrapper>
      <SortButton>Sort</SortButton>
      <PokemonCatalog>
        {pokemonCatalog?.map((content, index) => (
          <PokemonPreview
            key={index}
            onClick={() =>
              handleClick(content.specieName, content.formName, content.formId)
            }
          >
            <PokemonPreviewImageWrapper>
              <PokemonPreviewImage src={content.image} alt="Pokemon Image" />
            </PokemonPreviewImageWrapper>

            <PokemonPreviewName>
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
        disabled={isCatalogFetching || catalogItemsCount >= pokemonList.length}
        onClick={showMorePokemons}
      >
        Show more Pokemons!
      </ShowMoreButton>
    </PokemonCatalogWrapper>
  );
}

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
  text-decoration: none;

  &:hover {
    outline-offset: -1px;
  }
`;

const PokemonPreviewImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${mainBackgroundColor};
  width: 105px;
  height: 105px;
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
