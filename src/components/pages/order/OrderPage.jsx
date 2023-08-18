import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { styled } from "styled-components";
import { theme } from "../../../theme";

const OrderPage = () => {
  const { prenom } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <OrderPageStyled>
      <Navbar prenom={prenom} onClick={handleClick} />
    </OrderPageStyled>
  );
};

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  padding: 24px 56px;
`;
export default OrderPage;
