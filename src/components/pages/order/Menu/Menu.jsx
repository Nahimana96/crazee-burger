import React, { useContext } from "react";
import { styled } from "styled-components";
import Product from "../../../reusable-ui/Product.jsx";
import AdminContext from "../../../../context/AdminContext";
import { formatPrice } from "../../../../utils/maths.jsx";
import { theme } from "../../../../theme";
import EmptyMenuAdmin from "./EmptyMenuAdmin.jsx";
import EmptyMenuClient from "./EmptyMenuClient.jsx";
import { isValidUrl } from "../../../../utils/ValidUrl.jsx";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";
const Menu = () => {
  const {
    products,
    handleDelete,
    isModeAdmin,
    setProductToEdit,
    setIsPanelOpened,
    setCurrentTabSelected,
    productToEdit,
    titleEditRef,
  } = useContext(AdminContext);

  // gestionnaire d'événement
  const handleClick = async (idOfProductClicked) => {
    await setIsPanelOpened(true);
    await setCurrentTabSelected("edit");
    const productClickedOn = products.find(
      (product) => product.id === idOfProductClicked
    );
    await setProductToEdit(productClickedOn);
    titleEditRef.current && titleEditRef.current.focus();
  };

  const handleCardDelete = (event, id) => {
    event.stopPropagation();
    handleDelete(id);
    titleEditRef.current && titleEditRef.current.focus();
  };
  return (
    <MenuStyled className={products.length === 0 && "when-empty"}>
      {products.length === 0 ? (
        !isModeAdmin ? (
          <EmptyMenuClient />
        ) : (
          <EmptyMenuAdmin />
        )
      ) : (
        products.map(({ id, title, imageSource, price }) => {
          return (
            <Product
              className={isModeAdmin && "edit-mode"}
              onDelete={(event) => handleCardDelete(event, id)}
              key={id}
              title={title}
              version={
                productToEdit.id === id && isModeAdmin ? "selected" : "normal"
              }
              imageSource={
                isValidUrl(imageSource) ? imageSource : IMAGE_BY_DEFAULT
              }
              leftDescription={formatPrice(price)}
              hasDeleteButton={isModeAdmin}
              clickToEdit={isModeAdmin ? () => handleClick(id) : null}
            />
          );
        })
      )}
    </MenuStyled>
  );
};
const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  row-gap: 60px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 50px;
  .edit-mode {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      box-shadow: 0 0 8px 0 rgb(255 154 35 / 100%);
      transform: scale(1.05);
      transition: all 0.3s ease-in-out;
    }
  }
  &::-webkit-scrollbar {
    display: none;
  }
  .edit-mode {
  }
  .menu-vide {
    align-items: center;
    text-align: center;
    p,
    strong {
      font-family: "Amatic SC", cursive;
      padding-bottom: 20px;
      font-size: ${theme.fonts.P4};
    }
  }
`;
export default Menu;
