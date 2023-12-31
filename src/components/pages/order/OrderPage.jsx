import React, { useRef, useState } from "react";
import Navbar from "./Navbar/Navbar";
import { styled } from "styled-components";
import { theme } from "../../../theme";
import Main from "./Menu/Main";
import AdminContext from "../../../context/AdminContext";
import Basket from "./Basket/Basket";
import { useMenuProducts } from "../../../hooks/useMenuProducts";

const OrderPage = () => {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isPanelOpened, setIsPanelOpened] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [productToEdit, setProductToEdit] = useState({});
  const titleEditRef = useRef();
  const { products, resetMenu, handleAdd, handleEdit, handleDelete } =
    useMenuProducts();

  const adminContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isPanelOpened,
    setIsPanelOpened,
    currentTabSelected,
    setCurrentTabSelected,
    products,
    handleAdd,
    handleDelete,
    resetMenu,
    handleEdit,
    productToEdit,
    setProductToEdit,
    titleEditRef,
  };
  return (
    <AdminContext.Provider value={adminContextValue}>
      <OrderPageStyled>
        <Navbar />
        <Main />
        <Basket />
      </OrderPageStyled>
    </AdminContext.Provider>
  );
};

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  padding: 25px 0;
  display: grid;
  grid-template-rows: 10% 90%;
  grid-template-columns: 25% 75%;
`;
export default OrderPage;
