import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";

function Navigation({ onPageSelect, onSearch }) {
  const input = useRef(null);

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

  async function handleSubmit(e) {
    e.preventDefault();

    if (filterValue === "name") {
      onPageSelect("pokedex");
    } else if (filterValue === "type") {
      onPageSelect("type");
    }

    if (input !== null) {
      const pokemon = input.current.value;
      onSearch(pokemon);
    }
  }

  return (
    <>
      <Header>
        <HeaderContentWrapper>
          <NavigationWrapper>
            <NavigationPage
              $backgroundColor={"#8fbc8f"}
              onClick={() => onPageSelect("home")}
            >
              <span>Home</span>
            </NavigationPage>
            <NavigationPage
              $backgroundColor={"#ff4c4c"}
              onClick={() => onPageSelect("pokedex")}
            >
              <span>Pokedex</span>
            </NavigationPage>
            <NavigationPage
              $backgroundColor={"#2fadd3"}
              onClick={() => onPageSelect("catalog")}
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

const Header = styled.div`
  background-color: #282c34;
  width: 100%;
  z-index: 101;
`;

const HeaderContentWrapper = styled.div`
  width: 600px;
  margin-left: 20px;
  padding: 0 25px 15px 25px;
  background-color: #282c34;
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
  transition: background-color 0.3s ease;
  cursor: pointer;
  color: white;
  font-weight: bold;
  font-size: 18px;

  &:hover {
    background-color: #f1c91f;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  padding: 5px 15px 5px 15px;
  border-radius: 12px;
  background-color: #f5f5f5; //#f5f5f5 //#282c34
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
  background-color: #f5f5f5;
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
  border: 1px solid #282c34;
  border-radius: 50%;
  margin-left: 7px;
  transition: 0.2s all linear;

  &:checked {
    border: 6px solid #282c34;
  }
`;
