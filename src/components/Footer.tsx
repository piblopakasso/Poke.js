import React from "react";
import styled from "styled-components";

import { mainAccentColor } from "../appColors";

export default function Footer() {
  return (
    <FooterWrapper>
      <p>© 2024 Poke</p>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  padding: 20px 0 20px 0;
  color: white;
  background-color: ${mainAccentColor};
`;
