import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPokemonFormData, getPokemonList } from "../fetchFunctions";
import { formatId, formatPokemonListData } from "../utilityFunctions";
import { mainAccentColor } from "../appColors";
import LoadingDots from "./LoadingDots";

export default function NavigationArrows({ currentPokemonId }) {
  const navigate = useNavigate();

  const { data: allPokemons, isError: isAllPokemonsError } = useQuery({
    queryFn: async function () {
      const list = await getPokemonList();
      return formatPokemonListData(list);
    },
    queryKey: ["allPokemons"],
  });

  const firstPokemonId = 1;
  const lastPokemonId = allPokemons.ids.length;

  const {
    data: adjacentPokemonsData,
    isError: isAdjacentPokemonsDataError,
    isLoading: isAdjacentPokemonsDataLoading,
    isSuccess,
  } = useQuery({
    queryFn: async function () {
      const adjacentPokemons = findAdjacentPokemons();
      const promises = adjacentPokemons.map(getPokemonFormData);
      const [previous, next] = await Promise.all(promises);

      return {
        prevPokemon: {
          name: previous.species.name.toUpperCase(),
          id: formatId(previous.id),
        },
        nextPokemon: {
          name: next.species.name.toUpperCase(),
          id: formatId(next.id),
        },
      };
    },
    queryKey: ["previews", currentPokemonId],
  });

  function findAdjacentPokemons() {
    const previousPokemonId = findPrevPokemon();
    const nextPokemonId = findNextPokemon();

    return [previousPokemonId, nextPokemonId];
  }

  function findPrevPokemon() {
    return parseInt(currentPokemonId) === firstPokemonId
      ? lastPokemonId
      : parseInt(currentPokemonId) - 1;
  }

  function findNextPokemon() {
    return parseInt(currentPokemonId) === lastPokemonId
      ? firstPokemonId
      : parseInt(currentPokemonId) + 1;
  }

  function handleClick(name) {
    isSuccess && navigate(`/pokedex/${name.toLowerCase()}`);
  }

  return (
    (!isAllPokemonsError || isAdjacentPokemonsDataError) && (
      <NavigationArrowsWrapper>
        <LeftArrowWrapper>
          <LeftArrow
            onClick={() => handleClick(adjacentPokemonsData?.prevPokemon.name)}
          >
            {isAdjacentPokemonsDataLoading ? (
              <LoadingDots />
            ) : (
              <div>
                <ArrowContent>
                  #{adjacentPokemonsData?.prevPokemon.id}
                </ArrowContent>
                <ArrowContent>
                  {adjacentPokemonsData?.prevPokemon.name}
                </ArrowContent>
              </div>
            )}
          </LeftArrow>
        </LeftArrowWrapper>
        <RightArrowWrapper>
          <RightArrow
            onClick={() => handleClick(adjacentPokemonsData?.nextPokemon.name)}
          >
            {isAdjacentPokemonsDataLoading ? (
              <LoadingDots />
            ) : (
              <div>
                <ArrowContent>
                  #{adjacentPokemonsData?.nextPokemon.id}
                </ArrowContent>
                <ArrowContent>
                  {adjacentPokemonsData?.nextPokemon.name}
                </ArrowContent>
              </div>
            )}
          </RightArrow>
        </RightArrowWrapper>
      </NavigationArrowsWrapper>
    )
  );
}

const NavigationArrowsWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ArrowWrapper = styled.div`
  position: relative;
  top: 0;
  width: 400px;
  height: 60%;
  user-select: none;
  transition: all 0.3s ease;
  z-index: 101;
  font-size: 20px;
`;

const LeftArrowWrapper = styled(ArrowWrapper)`
  position: relative;
  left: -180px;

  &:hover {
    left: 0;
  }
`;

const RightArrowWrapper = styled(ArrowWrapper)`
  position: relative;
  right: -180px;

  &:hover {
    right: 0;
  }
`;

const LeftArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 50%;
  color: gainsboro;
  background-color: ${mainAccentColor};
  cursor: pointer;
  border-radius: 0 20px 20px 0;
`;

const RightArrow = styled(LeftArrow)`
  border-radius: 20px 0 0 20px;
  float: right;
`;

const ArrowContent = styled.p`
  margin: 5px 25px 5px 25px;
`;
