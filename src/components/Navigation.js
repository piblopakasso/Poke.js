import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";

function Navigation({ onPageSelect, onSearch }) {
  const input = useRef(null);

  const [selectedPage, setSelectedPage] = useState("Home");
  const [filterOptionsShown, setFilterOptionsShown] = useState(false);
  const [filterValue, setFilterValue] = useState("name");

  function toggleFilterOptions() {
    if (filterOptionsShown === true) {
      setFilterOptionsShown(false);
    } else {
      setFilterOptionsShown(true);
    }
  }

  function chooseFilter(e) {
    setFilterValue(e.target.value);
  }

  function handleClick(e, pageName) {
    setSelectedPage(e.target.textContent);
    onPageSelect(pageName);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (filterValue === "name") {
      onPageSelect("pokedex");
      setSelectedPage("Pokedex");
    } else if (filterValue === "type") {
      onPageSelect("catalog");
      setSelectedPage("Catalog");
    }

    if (input !== null) {
      const value = input.current.value;
      onSearch(value);
    }
  }

  return (
    <>
      <Header>
        <HeaderContentWrapper>
          <NavigationWrapper>
            <NavigationPage
              $selected={selectedPage === "Home"}
              $backgroundColor={"#8fbc8f"}
              onClick={(e) => handleClick(e, "home")}
            >
              <span>Home</span>
            </NavigationPage>
            <NavigationPage
              $selected={selectedPage === "Pokedex"}
              $backgroundColor={"#ff4c4c"}
              onClick={(e) => handleClick(e, "pokedex")}
            >
              <span>Pokedex</span>
            </NavigationPage>
            <NavigationPage
              $selected={selectedPage === "Catalog"}
              $backgroundColor={"#2fadd3"}
              onClick={(e) => handleClick(e, "catalog")}
            >
              <span>Catalog</span>
            </NavigationPage>
          </NavigationWrapper>

          <SearchWrapper>
            <SearchForm onSubmit={handleSubmit}>
              <InputLabel>
                Find your Pokemon!
                <SearchInput
                  ref={input}
                  type="text"
                  placeholder="Please enter ID or name"
                />
              </InputLabel>

              <SearchButton type="submit">Search</SearchButton>
            </SearchForm>
            <FilterWrapper>
              <FilterButton onClick={toggleFilterOptions}>Filter</FilterButton>
              <FilterOptionsWrapper $shown={filterOptionsShown}>
                <FilterOption>
                  <InputOption
                    type="radio"
                    name="filterOption"
                    value="name"
                    defaultChecked={true}
                    onClick={chooseFilter}
                  />
                  Name
                </FilterOption>

                <FilterOption>
                  <InputOption
                    type="radio"
                    name="filterOption"
                    value="type"
                    onClick={chooseFilter}
                  />
                  Type
                </FilterOption>
                {/*property $shown were used instead of {... && ...} construction to save the chosen filter option once filter options were closed*/}
              </FilterOptionsWrapper>
            </FilterWrapper>
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
  margin-top: 15px;
  padding: 5px 15px 5px 15px;
  border-radius: 12px;
  background-color: ${mainBackgroundColor}; //{mainAccentColor}
`;

const SearchForm = styled.form``;

const InputLabel = styled.label`
  display: inline-block;
`;

const SearchInput = styled.input`
  margin: 0 10px 0 10px;
  padding: 5px 5px 5px 20px;
  border: solid gainsboro 1px;
  border-radius: 8px;
`;

const SearchButton = styled.button`
  margin-right: 10px;
  padding: 5px 7px 5px 7px;
  border-radius: 8px;
  cursor: pointer;
  border: solid gainsboro 1px;

  &:hover {
    background-color: gainsboro;
  }
`;

const FilterWrapper = styled.div`
  position: relative;
`;

const FilterButton = styled(SearchButton)`
  padding: 5px 5px 5px 7px;

  &:after {
    content: "\\25BC";
    color: gray;
    margin-left: 15px;
    font-size: 12px;
  }
`;

const FilterOptionsWrapper = styled.div`
  position: absolute;
  margin-right: 10px;
  border: solid gainsboro 1px;
  border-radius: 8px;
  background-color: ${mainBackgroundColor};
  font-size: 12px;
  z-index: 100;

  ${(props) =>
    !props.$shown &&
    css`
      display: none;
    `};
`;

const FilterOption = styled.label`
  display: inline-block;
  padding: 5px 0 5px 0;
`;

const InputOption = styled.input`
  appearance: none;
  width: 12px;
  height: 12px;
  border: 1px solid ${mainAccentColor};
  border-radius: 50%;
  margin-left: 7px;
  transition: 0.2s all linear;

  &:checked {
    border: 7px solid ${mainAccentColor};
  }
`;
