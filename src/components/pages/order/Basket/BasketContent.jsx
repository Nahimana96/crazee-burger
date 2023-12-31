import React, { useContext } from "react";
import { theme } from "../../../../theme";
import styled from "styled-components";
import AdminContext from "../../../../context/AdminContext";

const BasketContent = () => {
  const { productsInBasket } = useContext(AdminContext);
  return (
    <BasketContentStyled>
      {productsInBasket.length === 0 ? (
        <span>Votre commande est vide</span>
      ) : (
        productsInBasket.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))
      )}
    </BasketContentStyled>
  );
};

const BasketContentStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
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
