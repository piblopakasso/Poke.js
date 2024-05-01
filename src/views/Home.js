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
            This is my home project that I decided to make from scratch to try
            something relatively complex and prove (at least to myself) that I
            can create stuff. It is far from perfection and there are still a
            lot of things that can be implemented, however, I am glad that it
            exists and can demonstrate some of my skills or potential.
          </ParagraphText>
        </ParagraphWrapper>

        <ParagraphWrapper>
          <ParagraphTitle>Why Pokemons?</ParagraphTitle>

          <ParagraphText>
            It started from a joke, and the joke got out of control.
            Surprisingly, it didn't go so badly, and in my opinion, it's always
            better to have some additional fun in a project that is supported
            only by your self-motivation (unfortunately, Nintendo did not pay me
            anything). PokeAPI proved to be an understandable and
            easy-to-work-with API. At the same time, it does have its cons and
            limitations, which provided valuable experience in problem-solving
            situations.
          </ParagraphText>
        </ParagraphWrapper>

        <ParagraphWrapper>
          <ParagraphTitle>What was used?</ParagraphTitle>

          <ParagraphText>
            At this stage of the project I have used:
          </ParagraphText>
          <List>
            <ListItem>
              <div>
                <TechLink href="https://pokeapi.co/">PokeAPI</TechLink>- to
                access Pokemon data;
              </div>
            </ListItem>
            <ListItem>
              <div>
                <TechLink href="https://tanstack.com/query/latest/">
                  TanStack
                </TechLink>
                - to help me deal with all tasks where fetching was involved;
              </div>
            </ListItem>
            <ListItem>
              <div>
                <TechLink href="https://reactrouter.com/en/main">
                  React Router
                </TechLink>
                - to make routing easier and more efficient;
              </div>
            </ListItem>
            <ListItem>
              <div>
                <TechLink href="https://styled-components.com/">
                  Styled Components
                </TechLink>
                - to change working with CSS in a more enjoyable way;
              </div>
            </ListItem>
            <ListItem>
              <div>
                <TechLink href="https://prettier.io/">Prettier</TechLink>- to
                format all the written code to meet nice-looking standards.
              </div>
            </ListItem>
          </List>
        </ParagraphWrapper>
      </ContentWrapper>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 20px auto;
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
  margin-bottom: 15px;
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

const List = styled.ul`
  margin-left: 20px;
  list-style: disc;
`;

const ListItem = styled.li`
  margin-top: 10px;
`;

const TechLink = styled.a`
  text-decoration: none;
  margin-right: 5px;
`;
