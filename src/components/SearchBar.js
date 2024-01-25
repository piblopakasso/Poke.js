import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";

import InputFieldByName from "./InputFieldByName";
import InputFieldByType from "./InputFieldByType";
import useClickOutside from "../hooks/useClickOutside";

export default function SearchBar() {
  const [searchRequest, setSearchRequest] = useState("");

  const [searchOption, setSearchOption] = useState("Name");
  const [searchOptionsShown, setSearchOptionsShown] = useState(false);

  const searchOptionSelect = useRef(null);

  function toggleSearchOptionSelect() {
    if (searchOptionsShown) {
      setSearchOptionsShown(false);
    } else {
      setSearchOptionsShown(true);
    }
  }

  function hideSearchOptionSelect() {
    setSearchOptionsShown(false);
  }

  function chooseSearchOption(e) {
    setSearchOption(e.target.textContent);
  }

  useClickOutside(searchOptionSelect, hideSearchOptionSelect);

  return (
    <>
      <SearchWrapper>
        <span>Find your Pokemon!</span>
        {searchOption === "Name" ? (
          <InputFieldByName
            inputValue={searchRequest}
            setInputValue={setSearchRequest}
          />
        ) : (
          <InputFieldByType
            selectedType={searchRequest}
            setSelectedType={setSearchRequest}
          />
        )}

        <SearchButton type="button">Search</SearchButton>

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

const mainBackgroundColor = "#F5F5F5";
const mainAccentColor = "#282c34";

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: 15px;
  padding: 5px 15px 5px 15px;
  border-radius: 12px;
  background-color: ${mainBackgroundColor};
`;

const SearchButton = styled.button`
  padding: 5px 10px 5px 10px;
  margin-right: 10px;
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
