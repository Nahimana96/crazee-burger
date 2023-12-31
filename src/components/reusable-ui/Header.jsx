import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const Header = ({ children }) => {
  return <HeaderStyled>{children}</HeaderStyled>;
};

const HeaderStyled = styled.div`
  height: 10%;
  background-color: ${theme.colors.background_dark};
  font-family: "Amatic SC", cursive;
  padding: 0 16px;
`;
export default Header;
