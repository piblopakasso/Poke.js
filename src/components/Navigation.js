import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";

import useClickOutside from "../hooks/useClickOutside";

function Navigation({ onPageSelect, onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const [selectedPage, setSelectedPage] = useState("Home");

  const [pokemonTypeOption, setPokemonTypeOption] = useState("Choose a type");
  const [pokemonTypeOptionsShown, setPokemonTypeOptionsShown] = useState(false);

  const [searchOption, setSearchOption] = useState("Name");
  const [searchOptionsShown, setSearchOptionsShown] = useState(false);

  const pokemonTypeSelect = useRef(null);
  const searchOptionSelect = useRef(null);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function togglePokemonTypeSelect() {
    if (pokemonTypeOptionsShown) {
      setPokemonTypeOptionsShown(false);
    } else {
      setPokemonTypeOptionsShown(true);
    }
  }

  function hidePokemonTypeSelect() {
    setPokemonTypeOptionsShown(false);
  }

  function choosePokemonType(e) {
    setPokemonTypeOption(e.target.textContent);
  }

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

  function handlePageSwitch(e, pageName) {
    setSelectedPage(e.target.textContent);
    onPageSelect(pageName);
  }

  function handleSubmit() {
    if (searchOption === "Name" && inputValue !== "") {
      onSearch(inputValue);
      onPageSelect("pokedex");
      setSelectedPage("Pokedex");
    } else if (
      searchOption === "Type" &&
      pokemonTypeOption !== "Choose a type"
    ) {
      onSearch(pokemonTypeOption.toLowerCase());
      onPageSelect("catalog");
      setSelectedPage("Catalog");
    }
  }

  useClickOutside(pokemonTypeSelect, hidePokemonTypeSelect);
  useClickOutside(searchOptionSelect, hideSearchOptionSelect);

  return (
    <>
      <Header>
        <HeaderContentWrapper>
          <NavigationWrapper>
            <NavigationPage
              $selected={selectedPage === "Home"}
              $backgroundColor={"#8fbc8f"}
              onClick={(e) => handlePageSwitch(e, "home")}
            >
              <span>Home</span>
            </NavigationPage>
            <NavigationPage
              $selected={selectedPage === "Pokedex"}
              $backgroundColor={"#ff4c4c"}
              onClick={(e) => handlePageSwitch(e, "pokedex")}
            >
              <span>Pokedex</span>
            </NavigationPage>
            <NavigationPage
              $selected={selectedPage === "Catalog"}
              $backgroundColor={"#2fadd3"}
              onClick={(e) => handlePageSwitch(e, "catalog")}
            >
              <span>Catalog</span>
            </NavigationPage>
          </NavigationWrapper>

          <SearchWrapper>
            <span>Find your Pokemon!</span>
            {searchOption === "Name" ? (
              <SearchInput
                value={inputValue}
                type="text"
                placeholder="Please enter ID or name"
                onChange={handleInputChange}
              />
            ) : (
              <TypeListWrapper ref={pokemonTypeSelect}>
                <TypeListButton onClick={togglePokemonTypeSelect}>
                  <TypeButtonText
                    $color={colors[pokemonTypeOption.toLowerCase()]}
                    $typeChosen={pokemonTypeOption !== "Choose a type"}
                  >
                    {pokemonTypeOption}
                  </TypeButtonText>
                </TypeListButton>
                {pokemonTypeOptionsShown && (
                  <TypeOptionsWrapper>
                    <TypeOption
                      $color={colors.normal}
                      onClick={choosePokemonType}
                    >
                      Normal
                    </TypeOption>
                    <TypeOption
                      $color={colors.fighting}
                      onClick={choosePokemonType}
                    >
                      Fighting
                    </TypeOption>
                    <TypeOption
                      $color={colors.flying}
                      onClick={choosePokemonType}
                    >
                      Flying
                    </TypeOption>
                    <TypeOption
                      $color={colors.poison}
                      onClick={choosePokemonType}
                    >
                      Poison
                    </TypeOption>
                    <TypeOption
                      $color={colors.ground}
                      onClick={choosePokemonType}
                    >
                      Ground
                    </TypeOption>
                    <TypeOption
                      $color={colors.rock}
                      onClick={choosePokemonType}
                    >
                      Rock
                    </TypeOption>
                    <TypeOption $color={colors.bug} onClick={choosePokemonType}>
                      Bug
                    </TypeOption>
                    <TypeOption
                      $color={colors.steel}
                      onClick={choosePokemonType}
                    >
                      Steel
                    </TypeOption>
                    <TypeOption
                      $color={colors.ghost}
                      onClick={choosePokemonType}
                    >
                      Ghost
                    </TypeOption>
                    <TypeOption
                      $color={colors.fire}
                      onClick={choosePokemonType}
                    >
                      Fire
                    </TypeOption>
                    <TypeOption
                      $color={colors.water}
                      onClick={choosePokemonType}
                    >
                      Water
                    </TypeOption>
                    <TypeOption
                      $color={colors.grass}
                      onClick={choosePokemonType}
                    >
                      Grass
                    </TypeOption>
                    <TypeOption
                      $color={colors.electric}
                      onClick={choosePokemonType}
                    >
                      Electric
                    </TypeOption>
                    <TypeOption
                      $color={colors.psychic}
                      onClick={choosePokemonType}
                    >
                      Psychic
                    </TypeOption>
                    <TypeOption $color={colors.ice} onClick={choosePokemonType}>
                      Ice
                    </TypeOption>
                    <TypeOption
                      $color={colors.dragon}
                      onClick={choosePokemonType}
                    >
                      Dragon
                    </TypeOption>
                    <TypeOption
                      $color={colors.dark}
                      onClick={choosePokemonType}
                    >
                      Dark
                    </TypeOption>
                    <TypeOption
                      $color={colors.fairy}
                      onClick={choosePokemonType}
                    >
                      Fairy
                    </TypeOption>
                  </TypeOptionsWrapper>
                )}
              </TypeListWrapper>
            )}

            <SearchButton type="button" onClick={handleSubmit}>
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
        </HeaderContentWrapper>
      </Header>
    </>
  );
}

export default Navigation;

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
};

const Header = styled.div`
  background-color: ${mainAccentColor};
  width: 100%;
  z-index: 101;
`;

const HeaderContentWrapper = styled.div`
  width: 600px;
  margin-left: 20px;
  padding: 0 25px 15px 25px;
  background-color: ${mainAccentColor};
  border-top: none;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  box-sizing: border-box;
`;

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavigationPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 40px;
  background-color: ${(props) => props.$backgroundColor};
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  transition: background-color 0.1s linear, outline-offset 0.1s linear,
    outline-color 0.1s linear;
  cursor: pointer;
  color: white;
  font-weight: bold;
  font-size: 18px;
  outline: solid ${(props) => props.$backgroundColor} 4px;
  outline-offset: -4px;

  ${(props) =>
    props.$selected &&
    css`
      outline-offset: -1px;
      outline-color: ${(props) => props.$backgroundColor};
    `};

  &:hover {
    background-color: #f1c91f;
    outline-color: #f1c91f;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: 15px;
  padding: 5px 15px 5px 15px;
  border-radius: 12px;
  background-color: ${mainBackgroundColor}; //{mainAccentColor}
`;

const SearchInput = styled.input`
  margin: 0 10px 0 10px;
  padding: 5px 10px 5px 20px;
  border: solid gainsboro 1px;
  border-radius: 8px;
  width: 200px;
  box-sizing: border-box;
  font-size: 14px;
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

const TypeListWrapper = styled(SearchOptionWrapper)`
  margin: 0 10px 0 10px;
`;

const TypeListButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 6px 10px 6px 20px;
  border: solid gainsboro 1px;
  border-radius: 8px;
  width: 200px;
  background-color: white;

  &:after {
    content: "\\25BC";
    color: gray;
    font-size: 12px;
  }
`;

const TypeButtonText = styled.span`
  font-size: 14px;
  color: gray;

  ${(props) =>
    props.$typeChosen &&
    css`
      color: black;

      &:after {
        content: "";
        border-left: solid ${(props) => props.$color} 6px;
        margin-left: 8px;
      }
    `};
`;

const TypeOptionsWrapper = styled(SearchOptionListWrapper)`
  padding: 3px 10px 3px 20px;
`;

const TypeOption = styled.div`
  padding: 3px 0 3px 0;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    &:after {
      content: "";
      border-left: solid ${(props) => props.$color} 6px;
      margin-left: 8px;
    }
  }
`;
