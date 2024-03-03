import React from "react";
import { useQuery } from "@tanstack/react-query";

import { getAbilityData } from "../fetchFunctions";
import { capitalizeFirstLetter } from "../utilityFunctions";
import { mainAccentColor } from "../appColors";
import LoadingDots from "../components/LoadingDots";
import styled from "styled-components";

function findAbilityDescription(object, name) {
  const abilityData = object.effect_entries.find(
    (element) => element.language.name === "en"
  );

  return {
    name: capitalizeFirstLetter(name),
    description: abilityData
      ? abilityData.effect
      : "The ability investigation is still in progress.",
  };
}

export default function PokemonAbility({ abilityName, hideDescription }) {
  const {
    data: pokemonAbility,
    isLoading,
    isError,
  } = useQuery({
    queryFn: async function () {
      const ability = await getAbilityData(abilityName);
      return findAbilityDescription(ability, abilityName);
    },
    queryKey: ["pokemonAbility", abilityName],
  });

  return (
    <AbilityDescriptionWrapper onClick={hideDescription}>
      <AbilityName>{capitalizeFirstLetter(abilityName)}</AbilityName>
      {isLoading ? (
        <LoadingDots />
      ) : (
        <AbilityDescription>{pokemonAbility.description}</AbilityDescription>
      )}
      {isError && (
        <AbilityDescription>
          Oops... There is no information about this ability.
        </AbilityDescription>
      )}
    </AbilityDescriptionWrapper>
  );
}

const AbilityDescriptionWrapper = styled.div`
  margin-top: 10px;
  padding: 10px;
  border-radius: 12px;
  color: white;
  box-sizing: border-box;
  background-color: ${mainAccentColor};
  cursor: pointer;
`;

const AbilityName = styled.p`
  padding-bottom: 10px;
`;

const AbilityDescription = styled.p`
  padding-bottom: 10px;
`;
