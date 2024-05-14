import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

import {
  capitalizeFirstLetter,
  translateIdToText,
  findSimilarItems,
  sortItems,
} from "../utilityFunctions";
import { mainBackgroundColor, mainAccentColor } from "../appColors";
import useClickOutside from "../hooks/useClickOutside";
import diceicon from "../images/diceicon.webp";

function checkPattern(value) {
  const pattern = /^[a-zA-Z0-9-]+$/;

  return pattern.test(value);
}

function highlightMatch(item, value) {
  const index = item.indexOf(value.toLowerCase());

  const before = item.substring(0, index);
  const match = item.substring(index, index + value.length);
  const after = item.substring(index + value.length);

  return (
    <span>
      {before && capitalizeFirstLetter(before)}
      <Match>{!before ? capitalizeFirstLetter(match) : match}</Match>
      {after}
    </span>
  );
}

function selectRandomId(pokemonIds) {
  const randomIndex = Math.floor(Math.random() * pokemonIds.length);

  return pokemonIds[randomIndex];
}

const itemsInSuggestedList = 12;

export default function InputFieldByName({
  pokemonList,
  inputValue,
  setInputValue,
  suggestedList,
  setSuggestedList,
}) {
  const [suggestedListShown, setSuggestedListShown] = useState(false);
  const suggestedListSelect = useRef(null);

  function toggleSuggestedList(value) {
    setSuggestedListShown(value !== "");
  }

  function hideSuggestedList() {
    setSuggestedListShown(false);
  }

  function handleInputChange(e) {
    const value = translateIdToText(e.target.value, pokemonList);
    const list = sortItems(findSimilarItems(value, pokemonList.names));

    if (checkPattern(e.target.value) || e.target.value === "") {
      setInputValue(e.target.value);
    }
    toggleSuggestedList(value);
    setSuggestedList(list);
  }

  function substituteInputValue(text) {
    setInputValue(capitalizeFirstLetter(text));
    setSuggestedList([text.toLowerCase()]);
    hideSuggestedList();
  }

  function handleRandom() {
    const randomItem = selectRandomId(pokemonList.names);
    substituteInputValue(randomItem);
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
            suggestedList.slice(0, itemsInSuggestedList).map((item, index) => (
              <DropListOption
                key={index}
                onClick={() => substituteInputValue(item)}
              >
                {highlightMatch(item, inputValue)}
              </DropListOption>
            ))
          )}
        </SearchInputDropList>
      )}
      <RandomButton onClick={handleRandom}>
        <Dice src={diceicon} alt="" />
      </RandomButton>
    </SearchInputWrapper>
  );
}

const SearchInputWrapper = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  padding: 5px 35px 5px 15px;
  border: solid gainsboro 1px;
  border-radius: 8px;
  width: 210px;
  box-sizing: border-box;
  font-size: 14px;
`;

const SearchInputDropList = styled.div`
  position: absolute;
  padding: 3px 10px 3px 15px;
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

const Match = styled.span`
  font-weight: bold;
  color: #2fadd3;
`;

const RandomButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 6px 10px 0 0;
`;

const shake = keyframes`
  0% {
    transform: translateX(1px);
  }
  25% {
    transform: translateX(-2px);
  }
  50% {
    transform: translateX(3px);
  }
  75% {
    transform: translateX(-2px);
  }
  100% {
    transform: translateX(1px);
  }
`;

const Dice = styled.img`
  width: 16px;
  cursor: pointer;
  transition: all linear 0.3s;

  &:hover {
    animation: 0.25s linear ${shake};
  }

  &:active {
    transform: rotate(360deg);
  }
`;
