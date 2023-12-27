import React from "react";
import styled from "styled-components";

const Basket = () => {
  return <BasketStyled>Votre commande est vide</BasketStyled>;
};

const BasketStyled = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  background-color: green;
  border-bottom-left-radius: 15px;
`;
export default Basket;
