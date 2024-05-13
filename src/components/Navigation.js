import React from "react";
import styled from "styled-components";

import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import { mainAccentColor } from "../appColors";

export default function Navigation() {
  return (
    <Header>
      <HeaderContentWrapper>
        <NavigationWrapper>
          <NavigationPage $backgroundColor={"#8fbc8f"} to="/">
            Home
          </NavigationPage>
          <NavigationPage $backgroundColor={"#ff4c4c"} to="/pokedex/bulbasaur">
            Pokedex
          </NavigationPage>
          <NavigationPage $backgroundColor={"#2fadd3"} to="/catalog">
            Catalog
          </NavigationPage>
        </NavigationWrapper>

        <SearchBar />
      </HeaderContentWrapper>
    </Header>
  );
}

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

const NavigationPage = styled(NavLink)`
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
  text-decoration: none;
  cursor: pointer;
  color: white;
  font-weight: bold;
  font-size: 18px;
  outline: solid ${(props) => props.$backgroundColor} 4px;
  outline-offset: -4px;

  &.active {
    outline-offset: -1px;
    outline-color: ${(props) => props.$backgroundColor};
  }

  &:hover {
    background-color: #f1c91f;
    outline-color: #f1c91f;
  }
`;
