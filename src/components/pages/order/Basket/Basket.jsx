import React from "react";
import styled from "styled-components";
import Total from "./Total";
import { formatPrice } from "../../../../utils/maths.jsx";
import Footer from "./Footer.jsx";
import BasketContent from "./BasketContent.jsx";
const Basket = () => {
  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0)} />
      <BasketContent />
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
  border-bottom-left-radius: 15px;
  overflow: hidden;
`;
export default Basket;
