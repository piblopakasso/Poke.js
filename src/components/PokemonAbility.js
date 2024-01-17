import React from "react";
import { useQuery } from "@tanstack/react-query";

import { getAbilityData } from "../fetchFunctions";
import { capitalizeFirstLetter } from "../utilityFunctions";
import LoadingDots from "../components/LoadingDots";
import styled from "styled-components";

export default function PokemonAbility({ abilityName, hideDescription }) {
  const {
    data: pokemonAbility,
    isLoading,
    isError,
  } = useQuery({
    queryFn: async function createPokemonAbilityCard() {
      const ability = await getAbilityData(abilityName);
      return findAbilityDescription(ability);
    },
    queryKey: ["pokemonCard", abilityName],
  });

  function findAbilityDescription(object) {
    let abilityInfo = {
      name: capitalizeFirstLetter(abilityName),
      description: "The ability investigation is still in progress.", //default value
    };

    for (let key of object.effect_entries) {
      if (key.language.name === "en") {
        abilityInfo = {
          name: capitalizeFirstLetter(abilityName),
          description: key.effect,
        };
        break;
      }
    }
    return abilityInfo;
  }

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

const mainAccentColor = "#282c34";

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
