import React from "react";
import Header from "../../../reusable-ui/Header";
import styled from "styled-components";
import { theme } from "../../../../theme";

const Footer = () => {
  return (
    <Header>
      <HeaderStyled>
        <span>codé avec ❤️ et react.Js</span>
      </HeaderStyled>
    </Header>
  );
};
const HeaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  span {
    font-size: ${theme.fonts.P2};
    color: ${theme.colors.white};
    font-weight: ${theme.weights.bold};
    font-family: "Amatic SC", cursive;
  }
`;
export default Footer;
