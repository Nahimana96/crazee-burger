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
  } = useContext(AdminContext);

  const handleClick = (idOfProductClicked) => {
    const productInfo = products.find(
      (product) => product.id == idOfProductClicked
    );
    setProductToEdit(productInfo);
    setIsPanelOpened(true);
    setCurrentTabSelected("edit");
  };
  return (
    <MenuStyled className={products.length == 0 && "when-empty"}>
      {products.length == 0 ? (
        !isModeAdmin ? (
          <EmptyMenuClient />
        ) : (
          <EmptyMenuAdmin />
        )
      ) : (
        products.map(({ id, title, imageSource, price }) => {
          return (
            <Product
              className={
                !isModeAdmin
                  ? ""
                  : productToEdit.id === id
                  ? "selected-product"
                  : "edit-mode"
              }
              onDelete={() => handleDelete(id)}
              key={id}
              title={title}
              imageSource={
                isValidUrl(imageSource) ? imageSource : IMAGE_BY_DEFAULT
              }
              leftDescription={formatPrice(price)}
              hasDeleteButton={isModeAdmin}
              clickToEdit={isModeAdmin ? () => handleClick(id) : () => {}}
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
  column-gap: 70px;
  row-gap: 60px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 50px 50px 150px;

  &::-webkit-scrollbar {
    display: none;
  }
  .edit-mode {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      box-shadow: 0px 0px 8px 0px #ff9a23;
      transform: scale(1.03);
      transition: all 0.3s ease-in-out;
    }
  }
  .selected-product {
    border: #ff9a23 2px solid;
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
