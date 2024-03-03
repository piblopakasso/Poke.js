import React from "react";
import styled from "styled-components";

export default function ErrorPage() {
  return (
    <ContentWrapper>
      <MainContent>Oops... Something went wrong</MainContent>
      <SecondaryContent>
        Check your internet connection and try again
      </SecondaryContent>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin: 70px auto;
`;
const MainContent = styled.div`
  margin: 40px 30px 0 30px;
  font-size: 28px;
  font-weight: bold;
`;
const SecondaryContent = styled.div`
  margin-top: 50px;
  font-size: 18px;
  font-weight: normal;
  text-align: center;
`;
