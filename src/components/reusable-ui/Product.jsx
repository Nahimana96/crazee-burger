import React from "react";
import Button from "./Button.jsx";
import { styled } from "styled-components";
import { theme } from "../../theme/index.jsx";
import { TiDelete } from "react-icons/ti";

const Product = ({
  title,
  leftDescription,
  imageSource,
  onDelete,
  hasDeleteButton,
  className,
  clickToEdit,
}) => {
  return (
    <ProductStyled className={className} onClick={clickToEdit}>
      {hasDeleteButton && (
        <div className="delete-button" onClick={onDelete}>
          <TiDelete />
        </div>
      )}
      <div className="image-product">
        <img src={imageSource} alt={title} />
      </div>
      <div className="text-info">
        <h1 className="title">{title}</h1>
        <div className="price-button">
          <p className="price">{leftDescription}</p>
          <Button className="button-ajouter" label="Ajouter" />
        </div>
      </div>
    </ProductStyled>
  );
};
const ProductStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 330px;
  padding: 50px 20px 30px 20px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};
  .delete-button {
    width: 30px;
    height: 30px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 15px;
    right: 15px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    :hover {
      color: ${theme.colors.redSecondary};
      transition: all 0.3s ease-in-out;
    }
    :active {
      color: ${theme.colors.primary};
    }
    svg {
      width: 100%;
      height: 100%;
      color: ${theme.colors.primary};
    }
  }
  .image-product {
    width: 200px;
    height: 145px;
    margin-bottom: 20px;
    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
  .text-info {
    width: 100%;
    padding: 5px;
    .title {
      margin-bottom: 5px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 240px;
      font-family: "Amatic SC", cursive;
      font-weight: ${theme.weights.bold};
      font-size: ${theme.fonts.P4};
    }
    .price-button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .price {
        color: ${theme.colors.primary};
      }
      .button-ajouter {
        display: flex;
        justify-content: center;
        width: 95px;
        height: 38px;
        align-items: center;
        &:active {
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
        }
      }
    }
  }
`;
export default Product;
