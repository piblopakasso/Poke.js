import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";

import { capitalizeFirstLetter } from "../utilityFunctions";
import useClickOutside from "../hooks/useClickOutside";

export default function InputFieldByType({ selectedType, setSelectedType }) {
  const [dropListShown, setDropListShown] = useState(false);
  const types = [
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
  ];
  const pokemonTypeSelect = useRef(null);

  function togglePokemonTypeSelect() {
    if (dropListShown) {
      setDropListShown(false);
    } else {
      setDropListShown(true);
    }
  }

  function hidePokemonTypeSelect() {
    setDropListShown(false);
  }

  function choosePokemonType(e) {
    setSelectedType(e.target.textContent);
    hidePokemonTypeSelect();
  }

  useClickOutside(pokemonTypeSelect, hidePokemonTypeSelect);

  return (
    <TypeSelectWrapper ref={pokemonTypeSelect}>
      <TypeSelectButton onClick={togglePokemonTypeSelect}>
        <TypeSelectButtonText
          $color={colors[selectedType?.toLowerCase()]}
          $touched={selectedType}
        >
          {!selectedType ? "Choose a type" : selectedType}
        </TypeSelectButtonText>
      </TypeSelectButton>
      {dropListShown && (
        <TypeSelectDropList>
          {types.map((item, index) => (
            <TypeOption
              key={index}
              $color={colors[item]}
              onClick={choosePokemonType}
            >
              {capitalizeFirstLetter(item)}
            </TypeOption>
          ))}
        </TypeSelectDropList>
      )}
    </TypeSelectWrapper>
  );
}

const mainBackgroundColor = "#F5F5F5";

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

const TypeSelectWrapper = styled.div`
  position: relative;
  margin: 0 10px 0 10px;
`;

const TypeSelectButton = styled.div`
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

const TypeSelectButtonText = styled.span`
  font-size: 14px;
  color: gray;

  ${(props) =>
    props.$touched &&
    css`
      color: black;

      &:after {
        content: "";
        border-left: solid ${(props) => props.$color} 6px;
        margin-left: 8px;
      }
    `};
`;

const TypeSelectDropList = styled.div`
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
