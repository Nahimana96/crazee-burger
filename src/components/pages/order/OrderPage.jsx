import React, { useRef, useState } from "react";
import Navbar from "./Navbar/Navbar";
import { styled } from "styled-components";
import { theme } from "../../../theme";
import Main from "./Menu/Main";
import AdminContext from "../../../context/AdminContext";
import { fakeMenu2 } from "../../../data/fakeMenu";
import { EMPTY_PRODUCT } from "../../../enums/product";
const OrderPage = () => {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isPanelOpened, setIsPanelOpened] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [products, setProducts] = useState(fakeMenu2);
  const [productToEdit, setProductToEdit] = useState({ EMPTY_PRODUCT });
  const [isEditFormRendered, setIsEditFormRendered] = useState(false);
  const inputRef = useRef();

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

  const editProduct = (idProductClicked) => {
    const productSelected = products.find(
      (product) => product.id == idProductClicked
    );
    setIsPanelOpened(true);
    setCurrentTabSelected("edit");
    setProductToEdit(productSelected);
    setIsEditFormRendered(true);
    focusOnInput();
  };
  const focusOnInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
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
    productToEdit,
    setProductToEdit,
    inputRef,
    isEditFormRendered,
    setIsEditFormRendered,
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
