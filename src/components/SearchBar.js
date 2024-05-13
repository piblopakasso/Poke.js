import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import InputFieldByName from "./InputFieldByName";
import InputFieldByType from "./InputFieldByType";
import useClickOutside from "../hooks/useClickOutside";
import { useQuery } from "@tanstack/react-query";
import { getPokemonFormData, getPokemonList } from "../fetchFunctions";
import { formatPokemonListData, translateIdToText } from "../utilityFunctions";
import { mainBackgroundColor, mainAccentColor } from "../appColors";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchOption, setSearchOption] = useState("Name");
  const [searchOptionsShown, setSearchOptionsShown] = useState(false);
  const navigate = useNavigate();
  const searchOptionSelect = useRef(null);

  const { data: allPokemons } = useQuery({
    queryFn: async function () {
      const list = await getPokemonList();
      return formatPokemonListData(list);
    },
    queryKey: ["allPokemons"],
  });

  const { refetch: refetchDefaultForm, isFetching } = useQuery({
    queryFn: async function () {
      const formData = await getPokemonFormData(searchQuery.toLowerCase());

      return formData.species.name;
    },
    queryKey: ["defaultForm"],
    enabled: false, //pokemons can have different forms based on their actual name (ex: venusaur-mega), this function gets the pokemon's actual pokemon name
  });

  function toggleSearchOptionSelect() {
    setSearchOptionsShown((searchOptionsShown) => !searchOptionsShown);
  }

  function hideSearchOptionSelect() {
    setSearchOptionsShown(false);
  }

  function chooseSearchOption(e) {
    setSearchOption(e.target.textContent);
    setSearchQuery("");
  }

  async function checkSearchQuery(query) {
    const queryIndex = allPokemons.names.indexOf(searchQuery.toLowerCase());
    const numberOfSpecies = allPokemons.ids.length;
    const validQuery = await refetchDefaultForm();

    queryIndex > numberOfSpecies
      ? navigate(`/pokedex/${validQuery.data}?form=${query}`)
      : navigate(`/pokedex/${validQuery.data}`);
  } //this function checks if the pokemon name (ex: venusaur) or the pokemon form name (ex: venusaur-mega) was searched and according to result transfer to the necessary page

  async function handleSubmit() {
    const searchVariants = searchResult.length;
    const formattedSearchQuery = translateIdToText(
      searchQuery.toLowerCase(),
      allPokemons
    );

    if (searchOption === "Type" && searchQuery !== "") {
      navigate(
        `/catalog?query=${searchQuery.toLowerCase()}&option=${searchOption.toLowerCase()}`
      );
    } else if (searchVariants === 1 && searchOption === "Name") {
      await checkSearchQuery(formattedSearchQuery);
    } else {
      navigate(
        `/catalog?query=${formattedSearchQuery}&option=${searchOption.toLowerCase()}`
      );
    }

    setSearchQuery("");
  }

  useClickOutside(searchOptionSelect, hideSearchOptionSelect);

  return (
    <>
      <SearchWrapper>
        <SearchBarText>Find your Pokemon!</SearchBarText>
        {searchOption === "Name" ? (
          <InputFieldByName
            pokemonList={allPokemons}
            inputValue={searchQuery}
            setInputValue={setSearchQuery}
            suggestedList={searchResult}
            setSuggestedList={setSearchResult}
          />
        ) : (
          <InputFieldByType
            selectedType={searchQuery}
            setSelectedType={setSearchQuery}
          />
        )}

        <SearchButton
          type="button"
          disabled={isFetching}
          onClick={handleSubmit}
        >
          Search
        </SearchButton>

        <SearchOptionWrapper ref={searchOptionSelect}>
          <SearchOptionButton onClick={toggleSearchOptionSelect}>
            {searchOption}
          </SearchOptionButton>
          {searchOptionsShown && (
            <SearchOptionListWrapper>
              <SearchOption onClick={chooseSearchOption}>Name</SearchOption>
              <SearchOption onClick={chooseSearchOption}>Type</SearchOption>
            </SearchOptionListWrapper>
          )}
        </SearchOptionWrapper>
      </SearchWrapper>
    </>
  );
}

const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  padding: 5px 15px 5px 15px;
  border-radius: 12px;
  background-color: ${mainBackgroundColor};
`;

const SearchBarText = styled.span`
  font-size: 15px;
`;

const SearchButton = styled.button`
  padding: 5px 10px 5px 10px;
  border-radius: 8px;
  cursor: pointer;
  border: solid gainsboro 1px;
  font-size: 14px;

  &:hover {
    background-color: gainsboro;
  }
`;

const SearchOptionWrapper = styled.div`
  position: relative;
`;

const SearchOptionButton = styled(SearchButton)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 80px;
  padding: 5px 10px 5px 10px;
  margin: 0;
  font-size: 14px;

  &:after {
    content: "\\25BC";
    color: gray;
    font-size: 12px;
  }
`;

const SearchOptionListWrapper = styled.div`
  position: absolute;
  padding: 3px 10px 3px 10px;
  border: solid gainsboro 1px;
  border-radius: 8px;
  background-color: ${mainBackgroundColor};
  font-size: 12px;
  z-index: 100;
  width: 100%;
  box-sizing: border-box;
`;

const SearchOption = styled.div`
  padding: 3px 0 3px 0;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    &:after {
      content: "";
      border-left: solid ${mainAccentColor} 6px;
      margin-left: 8px;
    }
  }
`;
