import React from "react";
import styled from "styled-components";

export default function PageNotFound() {
  return (
    <ContentWrapper>
      <MainContent>Page not found</MainContent>
      <SecondaryContent>
        The url address was entered incorrectly or the page no longer exist
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
