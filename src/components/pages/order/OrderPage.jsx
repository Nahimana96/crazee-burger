import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { styled } from "styled-components";
import { theme } from "../../../theme";
import Menu from "./Menu";

const OrderPage = () => {
  const { prenom } = useParams();

  return (
    <OrderPageStyled>
      <Navbar prenom={prenom} />
      <Menu />
    </OrderPageStyled>
  );
};

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  padding: 0 56px;
  display: grid;
  grid-template-rows: 12% 88%;
`;
export default OrderPage;
