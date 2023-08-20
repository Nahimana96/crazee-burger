import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../theme";

const Main = () => {
  return <MainStyled></MainStyled>;
};
const MainStyled = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;
  margin-bottom: 24px;
`;
export default Main;
