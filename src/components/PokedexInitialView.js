import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPokemonFormData } from "../fetchFunctions";

export default function PokedexInitialView() {
  const navigate = useNavigate();

  const { refetch: refetchDefaulForm } = useQuery({
    queryFn: async function convertToDefaultForm() {
      const formData = await getPokemonFormData(searchQuery.toLowerCase());

      return formData.species.name;
    },
    queryKey: ["defaultForm"],
    enabled: false, //pokemons can have different forms based on their actual name (ex: venusaur-mega), this function gets the pokemon's actual pokemon name
  });

  function generateRandomPokemonId() {
    return Math.floor(Math.random() * 1025) + 1;
  }

  function handleClick() {
    navigate(`/pokedex/${generateRandomPokemonId()}`);
  }

  return (
    <>
      <ContentWrapper>
        <ContentTextMain>
          Ohhh... you did not enter ID or name of the Pokemon... You may use
          search bar to find it!
        </ContentTextMain>
        <ContentTextSecondary>
          or press the following button to allow the universe choose one for you
          :)
        </ContentTextSecondary>
        <SurpriseMeButton onClick={handleClick}>Surprise Me!</SurpriseMeButton>
      </ContentWrapper>
    </>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #dcdcdc;
  width: 600px;
  margin: 70px auto;
  border-radius: 12px;
`;
const ContentTextMain = styled.p`
  margin: 40px 30px 0 30px;
  font-size: 28px;
  font-weight: bold;
`;

const ContentTextSecondary = styled(ContentTextMain)`
  margin-top: 50px;
  font-size: 18px;
  font-weight: normal;
  text-align: center;
`;
const SurpriseMeButton = styled.button`
  width: 160px;
  height: 60px;
  margin: 30px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  background-color: #8d9d9f;
  font-size: 18px;
  font-weight: bold;
  color: white;
  transition: all linear 0.2s;

  &:hover {
    background-color: #282c34;
  }
`;
