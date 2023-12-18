import React from "react";
import styled from "styled-components";
import { HiCursorClick } from "react-icons/hi";
import { theme } from "../../../../theme";

const HintMessage = () => {
  return (
    <HintMessageStyled>
      <span>Cliquer sur un produit pour le modifier</span>
      <HiCursorClick />
    </HintMessageStyled>
  );
};

const HintMessageStyled = styled.div`
  margin-top: 81px;
  margin-left: 71px;
  span {
    font-family: Amatic SC, "serif";
    font-size: ${theme.fonts.P3};
    line-height: normal;
    padding-right: 9px;
  }
`;
export default HintMessage;
