import React from "react";
import styled, { keyframes } from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { getData } from "../fetchFunctions";
import { capitalizeFirstLetter, formatId } from "../utilityFunctions";
import { mainAccentColor, mainBackgroundColor } from "../appColors";

type EvolutionChain = {
  evolves_to: EvolutionChain[];
  species: { url: string };
};

type EvolutionChainData = {
  formName: string;
  name: string;
  id: string;
  image: string | null;
};

interface SpecieData {
  forms: { name: string }[];
  species: { name: string };
  id: number;
  sprites: { front_default: string | null };
}

function formatEvolutionChain(data: EvolutionChain, arr: string[]) {
  const item = data.evolves_to;
  arr.push(data.species.url.replace("-species", ""));

  return item[0] ? formatEvolutionChain(item[0], arr) : arr;
}

export default function EvolutionChain({ chainUrl }: { chainUrl: string }) {
  const navigate = useNavigate();

  const { data: evolutionChainSpecies, isSuccess: isChainSpeciesSuccess } =
    useQuery<string[]>({
      queryFn: async function () {
        const data = await getData(chainUrl);
        const result: string[] = [];

        return formatEvolutionChain(data.chain, result);
      },
      queryKey: ["evolutionChainData", { chainUrl }],
    });

  const { data: evolutionChainData, isSuccess: isChainDataSuccess } = useQuery<
    EvolutionChainData[]
  >({
    queryFn: async function () {
      const promises: Promise<SpecieData>[] = evolutionChainSpecies.map(
        (item: string) => getData(item)
      );
      const chainSpecies = await Promise.all(promises);

      return chainSpecies.map((item) => ({
        formName: item.forms[0].name,
        name: item.species.name,
        id: formatId(item.id.toString()),
        image: item.sprites["front_default"],
      }));
    },
    queryKey: ["evolutionChainData", { evolutionChainSpecies }],
  });

  function handleClick(name: string) {
    navigate(`/pokedex?specie=${name.toLowerCase()}`);
  }

  return (
    <EvolutionChainWrapper>
      <h4>Evolution Chain</h4>
      {isChainSpeciesSuccess && isChainDataSuccess && (
        <EvolutionChainSpecies>
          {evolutionChainData?.map((content, index) => (
            <ChainSpecieWrapper key={index}>
              <ChainSpecie onClick={() => handleClick(content.name)}>
                <ChainSpecieImage src={content.image} alt="Pokemon Image" />

                <p>#{content.id}</p>
                <p>{capitalizeFirstLetter(content.name)}</p>
              </ChainSpecie>
              {index < evolutionChainSpecies.length - 1 && (
                <ArrowWrapper>
                  <Arrow />
                </ArrowWrapper>
              )}
            </ChainSpecieWrapper>
          ))}
        </EvolutionChainSpecies>
      )}
    </EvolutionChainWrapper>
  );
}

const EvolutionChainWrapper = styled.div`
  margin: 20px 20px 40px 20px;
`;

const growHeight = keyframes`
  from {
    max-height: 0;
  }
  to {
    max-height: 200px;
  }
`;

const EvolutionChainSpecies = styled.div`
  display: flex;
  width: fit-content;
  background: ${mainAccentColor};
  border-radius: 12px;
  margin-top: 10px;
  animation: 0.8s ease ${growHeight};
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ChainSpecieWrapper = styled.div`
  display: flex;
  opacity: 0;
  animation: 0.5s ease forwards 0.6s ${fadeIn};
`;

const ChainSpecie = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 150px;
  background-color: ${mainAccentColor};
  border-radius: 12px;
  padding: 15px 0 15px 0;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: white;
`;

const ChainSpecieImage = styled.img`
  width: 100px;
  height: 100px;
  background-color: ${mainBackgroundColor};
  border: solid 5px #dcdcdc;
  border-radius: 50%;
  padding: 5px;
  margin-bottom: 10px;
`;

const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  width: 55px;
`;

const Arrow = styled.div`
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 20px solid #dcdcdc;
`;
