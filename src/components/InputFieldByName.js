import React, { useRef, useState } from "react";
import styled from "styled-components";

import {
  capitalizeFirstLetter,
  translateIdToText,
  findSimilarItems,
  sortItems,
} from "../utilityFunctions";
import { mainBackgroundColor, mainAccentColor } from "../appColors";
import useClickOutside from "../hooks/useClickOutside";

function checkPattern(value) {
  const pattern = /^[a-zA-Z0-9-]+$/;

  return pattern.test(value);
}

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
    value === "" ? setSuggestedListShown(false) : setSuggestedListShown(true);
  }

  function hideSuggestedList() {
    setSuggestedListShown(false);
  }

  function handleInputChange(e) {
    const value = translateIdToText(e.target.value, pokemonList);
    const list = sortItems(findSimilarItems(value, pokemonList));

    if (checkPattern(e.target.value) || e.target.value === "") {
      setInputValue(e.target.value);
    }
    toggleSuggestedList(value);
    setSuggestedList(list);
  }

  function substituteInputValue(e) {
    const text = e.target.textContent;

    setInputValue(text);
    setSuggestedList([text.toLowerCase()]);
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
            suggestedList.slice(0, 6).map((item, index) => (
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
