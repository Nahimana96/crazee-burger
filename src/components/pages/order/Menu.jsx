import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../theme";

const Menu = () => {
  return <MenuStyled></MenuStyled>;
};
const MenuStyled = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;
  margin: 0 auto;
  margin-bottom: 24px;
  width: 100%;
  max-width: 1400px;
`;
export default Menu;
