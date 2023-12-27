import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Header from "../../../reusable-ui/Header";
import Total from "./Total";
import { formatPrice } from "../../../../utils/maths.jsx";
import Footer from "./Footer.jsx";
const Basket = () => {
  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0)} />
      <div className="basket-content">
        <span>Votre commande est vide</span>
      </div>
      <Footer />
    </BasketStyled>
  );
};

const BasketStyled = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  display: flex;
  flex-direction: column;

  div span {
    /* font-family: "Amatic SC", cursive; */
  }

  .basket-content {
    height: 80%;
    background-color: ${theme.colors.background_white};
    color: ${theme.colors.greyBlue};
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2) inset;
  }
`;
export default Basket;
