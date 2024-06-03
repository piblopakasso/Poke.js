import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getAbilityData } from "../fetchFunctions";
import { capitalizeFirstLetter } from "../utilityFunctions";
import { additionalAccentColor, mainAccentColor } from "../appColors";
import styled, { css, keyframes } from "styled-components";

type AbilityDescriptionState = {
  shown: boolean;
  name: string | null;
  description: string | null;
};

type FlavorTextEntry = {
  flavor_text: string;
  language: {
    name: string;
  };
};

type AbilitiesData = {
  name: string;
  flavor_text_entries: FlavorTextEntry[];
};

type AbilityDescription = {
  [key: string]: string;
};

function findAbilityDescription(object: AbilitiesData) {
  const abilityData = object.flavor_text_entries.find(
    (element) => element.language.name === "en"
  );

  return abilityData
    ? abilityData.flavor_text
    : "The ability investigation is still in progress.";
}

export default function PokemonAbilities({
  abilities,
}: {
  abilities: string[];
}) {
  const [abilityDescription, setAbilityDescription] =
    useState<AbilityDescriptionState>({
      shown: false,
      name: null,
      description: null,
    });

  const { data: pokemonAbilities, isError } = useQuery({
    queryFn: async function () {
      const promises: Promise<AbilitiesData>[] = abilities.map((item) =>
        getAbilityData(item)
      );
      const abilitiesData: AbilitiesData[] = await Promise.all(promises);

      console.log(abilitiesData);

      return abilitiesData.reduce<AbilityDescription>((obj, item) => {
        return {
          ...obj,
          [item.name]: findAbilityDescription(item),
        };
      }, {});
    },
    queryKey: ["pokemonAbility", abilities],
  });

  useEffect(() => {
    hideAbilityDescription();
  }, [abilities]);

  function hideAbilityDescription() {
    setAbilityDescription((prevState) => ({
      ...prevState,
      shown: false,
      name: null,
    }));
  }

  function handleAbilityDescription(data: string) {
    setAbilityDescription((prevState) => ({
      ...prevState,
      shown: !(abilityDescription.shown && abilityDescription.name === data),
      name: data,
      description: pokemonAbilities[data],
    }));
  }

  return (
    <AbilitiesWrapper>
      <h4>Abilities</h4>

      {abilities?.map((text, index) => (
        <AbilityTitle
          $active={
            !abilityDescription.shown || text === abilityDescription.name
          }
          key={index}
          onClick={() => handleAbilityDescription(text)}
        >
          {capitalizeFirstLetter(text)}
        </AbilityTitle>
      ))}
      {abilityDescription.shown && (
        <AbilityDescriptionWrapper onClick={hideAbilityDescription}>
          <AbilityDescription>
            {isError
              ? "Oops... something went wrong"
              : abilityDescription.description}
          </AbilityDescription>
        </AbilityDescriptionWrapper>
      )}
    </AbilitiesWrapper>
  );
}

type AbilityTitleProps = {
  $active: boolean;
};

const AbilitiesWrapper = styled.div`
  margin: 20px 20px 0 20px;
`;

const AbilityTitle = styled.div<AbilityTitleProps>`
  display: inline-block;
  padding: 10px;
  margin: 10px 10px 0 0;
  border-radius: 12px;
  color: white;
  background-color: ${mainAccentColor};
  cursor: pointer;
  transition: background-color 0.2s ease;

  ${(props) =>
    props.$active
      ? css`
          background-color: ${mainAccentColor};
        `
      : css`
          background-color: ${additionalAccentColor};
        `};
`;

const growHeight = keyframes`
  from {
    max-height: 0;
  }
  to {
    max-height: 100px;
  }
`;

const AbilityDescriptionWrapper = styled.div`
  margin-top: 10px;
  border-radius: 12px;
  color: white;
  box-sizing: border-box;
  background-color: ${mainAccentColor};
  cursor: pointer;
  animation: 1s ease ${growHeight};
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AbilityDescription = styled.p`
  padding: 20px 10px 20px 10px;
  opacity: 0;
  animation: 0.4s ease forwards 0.5s ${fadeIn};
`;
