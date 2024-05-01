import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";

import { capitalizeFirstLetter } from "../utilityFunctions";
import { mainBackgroundColor, colors } from "../appColors";
import useClickOutside from "../hooks/useClickOutside";

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

export default function InputFieldByType({ selectedType, setSelectedType }) {
  const [dropListShown, setDropListShown] = useState(false);
  const pokemonTypeSelect = useRef(null);

  function togglePokemonTypeSelect() {
    setDropListShown((dropListShown) => !dropListShown);
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
  line-height: 1;

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
