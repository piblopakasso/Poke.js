import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { getPokemonList } from "../fetchFunctions";
import { capitalizeFirstLetter } from "../utilityFunctions";
import useClickOutside from "../hooks/useClickOutside";
import { useQuery } from "@tanstack/react-query";

export default function InputFieldByName({ inputValue, setInputValue }) {
  const [suggestedList, setSuggestedList] = useState([]);
  const [suggestedListShown, setSuggestedListShown] = useState(false);

  const suggestedListSelect = useRef(null);

  const { data: pokemonList, isError } = useQuery({
    queryFn: async function createPokemonList() {
      const list = await getPokemonList();

      return list.results;
    },
    queryKey: ["pokemonList"],
  });

  useEffect(() => {
    if (pokemonList) {
      suggestPokemon();
    }
  }, [inputValue, pokemonList]);

  function suggestPokemon() {
    const nameList = pokemonList.map((item) => item.name);
    const idList = pokemonList.map((item) =>
      item.url.replace("https://pokeapi.co/api/v2/pokemon/", "").slice(0, -1)
    );
    const knownPokemons = idList.filter((id) => id.length <= 4); //we need only pokemons` ids. (pokemons have id with 1-4 digits, pokemons` forms have id with 5 digits)
    const validTextInput =
      isNaN(inputValue) && inputValue !== "" && inputValue.length >= 3;
    const validNumberInput =
      !isNaN(inputValue) &&
      inputValue !== "" &&
      inputValue <= knownPokemons.length;
    let list = [];

    if (validTextInput) {
      list = nameList.filter((name) => name.includes(inputValue.toLowerCase()));
    } else if (validNumberInput) {
      const index = idList.indexOf(inputValue);
      list = [nameList[index]];
    }

    setSuggestedList(list);
  }

  function checkPattern(input) {
    const pattern = /^[a-zA-Z0-9-]+$/;

    if (pattern.test(input) || input === "") {
      setInputValue(input);
    }
  }

  function toggleSuggestedList(input) {
    if (input === "") {
      setSuggestedListShown(false);
    } else {
      setSuggestedListShown(true);
    }
  }

  function hideSuggestedList() {
    setSuggestedListShown(false);
  }

  function handleInputChange(e) {
    const value = e.target.value;

    checkPattern(value);
    toggleSuggestedList(value);
  }

  function substituteInputValue(e) {
    const text = e.target.textContent;
    setInputValue(text);
    hideSuggestedList();
  }

  useClickOutside(suggestedListSelect, hideSuggestedList);

  return (
    <SearchInputWrapper>
      <SearchInput
        value={inputValue}
        type="text"
        placeholder="Please enter ID or name"
        onChange={handleInputChange}
      />
      {suggestedListShown && (
        <SearchInputDropList ref={suggestedListSelect}>
          {suggestedList.length === 0 ? (
            <NotFoundMessage>Pokemon not found</NotFoundMessage>
          ) : (
            suggestedList.slice(0, 12).map((item, index) => (
              <DropListOption key={index} onClick={substituteInputValue}>
                {capitalizeFirstLetter(item)}
              </DropListOption>
            ))
          )}
        </SearchInputDropList>
      )}
    </SearchInputWrapper>
  );
}

const mainBackgroundColor = "#F5F5F5";
const mainAccentColor = "#282c34";

const SearchInputWrapper = styled.div`
  position: relative;
  margin: 0 10px 0 10px;
`;

const SearchInput = styled.input`
  padding: 5px 10px 5px 20px;
  border: solid gainsboro 1px;
  border-radius: 8px;
  width: 200px;
  box-sizing: border-box;
  font-size: 14px;
`;

const SearchInputDropList = styled.div`
  position: absolute;
  padding: 3px 10px 3px 20px;
  border: solid gainsboro 1px;
  border-radius: 8px;
  background-color: ${mainBackgroundColor};
  font-size: 12px;
  z-index: 100;
  width: 100%;
  box-sizing: border-box;
`;

const DropListOption = styled.div`
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

const NotFoundMessage = styled.div`
  padding: 3px 0 3px 0;
  font-size: 14px;
  cursor: default;
  color: gray;
`;
