import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import { styled } from "styled-components";
import { theme } from "../../../theme";
import Main from "./Menu/Main";
import AdminContext from "../../../context/AdminContext";
import { fakeMenu2 } from "../../../data/fakeMenu";

const OrderPage = () => {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isPanelOpened, setIsPanelOpened] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [products, setProducts] = useState(fakeMenu2);
  const handleAdd = (newProduct) => {
    const copyOfProducts = [...products];
    const productsUpdated = [newProduct, ...copyOfProducts];
    setProducts(productsUpdated);
  };

  const handleDelete = (id) => {
    const copyOfProducts = [...products];
    const productsUpdated = copyOfProducts.filter(
      (product) => product.id !== id
    );
    setProducts(productsUpdated);
  };

  const resetMenu = () => {
    setProducts(fakeMenu2);
  };

  const editProduct = () => {
    setIsPanelOpened(true);
    setCurrentTabSelected("edit");
  };
  const adminContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isPanelOpened,
    setIsPanelOpened,
    currentTabSelected,
    setCurrentTabSelected,
    products,
    setProducts,
    handleAdd,
    handleDelete,
    resetMenu,
    editProduct,
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
