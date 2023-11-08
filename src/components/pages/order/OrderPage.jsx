import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import { styled } from "styled-components";
import { theme } from "../../../theme";
import Main from "./Menu/Main";
import AdminContext from "../../../context/AdminContext";

const OrderPage = () => {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isPanelOpened, setIsPanelOpened] = useState(false);
  const [addIsActive, setAddIsActive] = useState(true);
  const [modifyIsActive, setModifyIsActive] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const adminContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isPanelOpened,
    setIsPanelOpened,
    addIsActive,
    setAddIsActive,
    modifyIsActive,
    setModifyIsActive,
    currentTabSelected,
    setCurrentTabSelected,
  };
  return (
    <AdminContext.Provider value={adminContextValue}>
      <OrderPageStyled>
        <Navbar />
        <Main />
      </OrderPageStyled>
    </AdminContext.Provider>
  );
};

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: grid;
  grid-template-rows: 12% 88%;
`;
export default OrderPage;
