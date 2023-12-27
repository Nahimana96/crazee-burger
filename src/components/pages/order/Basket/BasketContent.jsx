import React from "react";
import { theme } from "../../../../theme";
import styled from "styled-components";

const BasketContent = () => {
  return (
    <BasketContentStyled>
      <span>Votre commande est vide</span>
    </BasketContentStyled>
  );
};

const BasketContentStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  background-color: ${theme.colors.background_white};
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2) inset;
  span {
    color: ${theme.colors.greyBlue};
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.P4};
  }
`;
export default BasketContent;
