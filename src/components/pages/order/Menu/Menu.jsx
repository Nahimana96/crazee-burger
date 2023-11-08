import React from "react";
import { styled } from "styled-components";
import Product from "./Product";
const Menu = ({ products }) => {
  const isValidUrl = (imageUrl) => {
    const imageUrlRegex = /\.(jpeg|jpg|gif|png)$/i;
    return imageUrlRegex.test(imageUrl);
  };
  return (
    <MenuStyled>
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            title={product.title}
            imageSource={
              isValidUrl(product.imageSource)
                ? product.imageSource
                : "/images/coming-soon.png"
            }
            price={product.price}
          />
        );
      })}
    </MenuStyled>
  );
};
const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 85px;
  row-gap: 60px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 50px 50px 150px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export default Menu;
