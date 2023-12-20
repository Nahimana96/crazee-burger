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

  const handleEdit = (productBeingEdited) => {
    // copie du state (deep clone)
    const copyOfProducts = JSON.parse(JSON.stringify(products));

    // manip de la copie du state
    const indexOfProductToEdit = copyOfProducts.findIndex(
      (product) => product.id === productBeingEdited.id
    );

    copyOfProducts[indexOfProductToEdit] = productBeingEdited;

    // update du state
    setProducts(copyOfProducts);
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
    handleEdit,
    productToEdit,
    setProductToEdit,
    inputRef,
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
