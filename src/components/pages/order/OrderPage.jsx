import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { styled } from "styled-components";
import { theme } from "../../../theme";
import Main from "./Menu/Main";

const OrderPage = () => {
  const { prenom } = useParams();

  return (
    <OrderPageStyled>
      <Navbar prenom={prenom} />
      <Main />
    </OrderPageStyled>
  );
};

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: grid;
  grid-template-rows: 12% 88%;
`;
export default OrderPage;
