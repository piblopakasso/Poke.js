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
            This is a little project that I decided to make from scratch to try
            something relatively complex and prove (at least to myself) that I
            can create stuff. It is far from perfection and there are still a
            lot of things that can be implemented, however, I am glad that it
            exist and can demonstrate some of my skills or my potential.
          </ParagraphText>
        </ParagraphWrapper>

        <ParagraphWrapper>
          <ParagraphTitle>Why Pokemons?</ParagraphTitle>

          <ParagraphText>
            It started from a joke and the joke got out of control. Surprisingly
            it did not go so bad and, on my thought, it is always better to have
            some additional fun in a project that is supported only by your
            self-motivation (unfortunately Nintendo did not paid me anything).
            PokeAPI showed itself as understandable and easy to work with API.
            At the same time, it has it cons and limitations resulting in the
            problem solving situations.
          </ParagraphText>
        </ParagraphWrapper>

        <ParagraphWrapper>
          <ParagraphTitle>What was used?</ParagraphTitle>

          <ParagraphText></ParagraphText>
          <ul>
            At this stage of the project there were used:
            <li>My imagination</li>
          </ul>
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
  padding: 30px 30px 0 30px;
`;

const ParagraphWrapper = styled.div`
  margin-bottom: 30px;
`;

const ParagraphTitle = styled.h4`
  display: inline-block;
  color: white;
  background-color: #8d9d9f;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 10px;
`;

const ParagraphText = styled.p`
  color: #282c34;
`;
