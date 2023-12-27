import React from "react";
import Button from "./Button.jsx";
import { css, styled } from "styled-components";
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
  version = "normal",
}) => {
  return (
    <ProductStyled
      className={className}
      onClick={clickToEdit}
      version={version}
    >
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
          <Button
            className="button-ajouter"
            label="Ajouter"
            onClick={(e) => e.stopPropagation()}
          />
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
  width: 240px;
  height: 330px;
  padding: 50px 20px 30px 20px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};
  place-self: center;

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
      transition: all 0.3s ease-in-out;
    }

    svg {
      width: 100%;
      height: 100%;
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

      .button-ajouter {
        display: flex;
        justify-content: center;
        width: 95px;
        height: 38px;
        align-items: center;
      }
    }
  }
  ${({ version }) => extraStyle[version]};
`;

const extraStyleNormal = css`
  .delete-button {
    :hover {
      color: ${theme.colors.redSecondary} !important;
    }
    :active {
      color: ${theme.colors.primary};
    }
    svg {
      color: ${theme.colors.primary};
    }
  }
  .text-info .price-button {
    .price {
      color: ${theme.colors.primary};
    }
    .button-ajouter {
      &:active {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
      }
    }
  }
`;

const extraStyleSelected = css`
  background: ${theme.colors.primary} !important;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 8px 0px ${theme.colors.primary};
    transform: scale(1.03);
    transition: all 0.3s ease-in-out;
  }
  .delete-button {
    :hover {
      color: ${theme.colors.redSecondary} !important;
    }
    :active {
      color: ${theme.colors.white};
    }
    svg {
      color: ${theme.colors.white} !important;
    }
  }
  .text-info .price-button {
    .price {
      color: ${theme.colors.white};
    }
    .button-ajouter {
      background-color: ${theme.colors.white} !important;
      color: ${theme.colors.primary};
      &:hover {
        border: 1px solid ${theme.colors.white};
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary} !important;
      }
    }
  }
`;

const extraStyle = {
  normal: extraStyleNormal,
  selected: extraStyleSelected,
};
export default Product;
