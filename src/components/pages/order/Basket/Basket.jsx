import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";

const Basket = () => {
  return (
    <BasketStyled>
      <div className="total">
        <span>Total</span>
        <span>0,00€</span>
      </div>
      <div className="basket-content">
        <span>Votre commande est vide</span>
      </div>
      <div className="basket-footer">
        <span>codé avec ❤️ et react.Js</span>
      </div>
    </BasketStyled>
  );
};

const BasketStyled = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.P4};
  }
  div span {
    font-family: "Amatic SC", cursive;
  }
  .total {
    justify-content: space-between;
    padding: 0 16px;
  }
  .total,
  .basket-footer {
    height: 10%;
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.primary};
  }
  .basket-content {
    height: 80%;
    background-color: ${theme.colors.background_white};
    color: ${theme.colors.greyBlue};
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2) inset;
  }
  .basket-footer {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P2};
    font-weight: ${theme.weights.bold};
    border-bottom-left-radius: 15px;
  }
`;
export default Basket;
