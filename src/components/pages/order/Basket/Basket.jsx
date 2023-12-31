import React, { useContext } from "react";
import styled from "styled-components";
import Total from "./Total";
import { formatPrice } from "../../../../utils/maths.jsx";
import Footer from "./Footer.jsx";
import BasketContent from "./BasketContent.jsx";
import AdminContext from "../../../../context/AdminContext.jsx";
const Basket = () => {
  const { productsInBasket } = useContext(AdminContext);
  const total = formatPrice(
    productsInBasket.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );
  return (
    <BasketStyled>
      <Total amountToPay={total} />
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
