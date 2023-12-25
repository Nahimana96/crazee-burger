import React, { useRef, useState } from "react";
import Navbar from "./Navbar/Navbar";
import { styled } from "styled-components";
import { theme } from "../../../theme";
import Main from "./Menu/Main";
import AdminContext from "../../../context/AdminContext";
import { fakeMenu2 } from "../../../data/fakeMenu";
import { deepClone } from "../../../utils/array";

const OrderPage = () => {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isPanelOpened, setIsPanelOpened] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [products, setProducts] = useState(fakeMenu2);
  const [productToEdit, setProductToEdit] = useState({});
  const titleEditRef = useRef();

  const resetMenu = () => {
    setProducts(fakeMenu2);
  };

  // gestionnaires du state
  const handleAdd = (newProduct) => {
    // copie du state
    const copyOfProducts = deepClone(products);

    // manipulation de la copie
    const productsUpdated = [newProduct, ...copyOfProducts];

    // update du state
    setProducts(productsUpdated);
  };

  const handleDelete = (idOfProductToDelete) => {
    // copie du state
    const copyOfProducts = deepClone(products);

    // manipulation de la copie
    const productsUpdated = copyOfProducts.filter(
      (product) => product.id !== idOfProductToDelete
    );

    // update du state
    setProducts(productsUpdated);
    productToEdit.id === idOfProductToDelete && setProductToEdit({});
  };

  const handleEdit = (productBeingEdited) => {
    // copie du state (deep clone)
    const copyOfProducts = deepClone(products);

    // manip de la copie du state
    const indexOfProductToEdit = copyOfProducts.findIndex(
      (product) => product.id === productBeingEdited.id
    );

    copyOfProducts[indexOfProductToEdit] = productBeingEdited;

    // update du state
    setProducts(copyOfProducts);
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
    titleEditRef,
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
