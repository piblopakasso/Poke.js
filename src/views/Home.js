import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <HomeWrapper>
      <MainTitle>About</MainTitle>

      <ContentWrapper>
        <ParagraphWrapper>
          <ParagraphTitle>What is this?</ParagraphTitle>

          <ParagraphText>
            This is a little project that I decided to make from scratch to show
            and prove (at least to myself) that I can create something. It is
            far from perfection, however, I am glad that I have evolved (pokemon
            reference) in something more viable than just another guy that
            finished 2-days online courses.
          </ParagraphText>
        </ParagraphWrapper>

        <ParagraphWrapper>
          <ParagraphTitle>Why Pokemons?</ParagraphTitle>

          <ParagraphText>
            Surprisingly the PokeApi showed itself as a well designed,
            understandable and fun to work with API. In addition to that, Not
            surprisingly at all, pokemons are adorable. I really enjoyed
            developing this lil project.
          </ParagraphText>
        </ParagraphWrapper>

        <ParagraphWrapper>
          <ParagraphTitle>What was used?</ParagraphTitle>

          <ParagraphText>Piu pau Bla bla Shimba bumba</ParagraphText>
        </ParagraphWrapper>
      </ContentWrapper>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 70px auto;
  font-size: 18px;
`;

const MainTitle = styled.h3`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  padding: 20px 0 20px 0;
`;

const ContentWrapper = styled.div`
  background-color: #dcdcdc;
  border-radius: 12px;
  padding: 30px 30px 20px 30px;
`;

const ParagraphWrapper = styled.div``;

const ParagraphTitle = styled.h4`
  display: inline-block;
  color: white;
  background-color: #8d9d9f;
  border-radius: 5px;
  padding: 5px;
`;

const ParagraphText = styled.p`
  margin: 10px 0 30px;
  color: #282c34;
`;
