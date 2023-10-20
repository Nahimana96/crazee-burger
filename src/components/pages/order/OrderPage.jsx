import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { styled } from "styled-components";
import { theme } from "../../../theme";
import Main from "./Menu/Main";
import AdminContext from "../../../context/AdminContext";

const OrderPage = () => {
  const { prenom } = useParams();
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const adminContextValue = {
    isModeAdmin,
  };
  return (
    <OrderPageStyled>
      <Navbar
        prenom={prenom}
        isModeAdmin={isModeAdmin}
        setIsModeAdmin={setIsModeAdmin}
      />
      <AdminContext.Provider value={adminContextValue}>
        <Main />
      </AdminContext.Provider>
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
