import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { styled } from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main";

const OrderPage = () => {
  const { prenom } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <OrderPageStyled>
      <Navbar prenom={prenom} onClick={handleClick} />
      <Main />
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
