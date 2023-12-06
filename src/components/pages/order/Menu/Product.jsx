import React, { useContext } from "react";
import PrimaryButton from "../../../reusable-ui/PrimaryButton.jsx";
import { formatPrice } from "../../../../utils/maths.jsx";
import { styled } from "styled-components";
import { theme } from "../../../../theme/index.jsx";
import { TiDelete } from "react-icons/ti";
import AdminContext from "../../../../context/AdminContext.jsx";

const Product = ({ title, price, imageSource, onClick }) => {
  const { isModeAdmin } = useContext(AdminContext);

  return (
    <ProductStyled>
      {isModeAdmin && (
        <div className="delete-button" onClick={onClick}>
          <TiDelete />
        </div>
      )}
      <div className="image-product">
        <img src={imageSource} alt={title} />
      </div>
      <div className="text-info">
        <h1 className="title">{title}</h1>
        <div className="price-button">
          <p className="price">{formatPrice(price)}</p>
          <PrimaryButton className="button-ajouter" label="Ajouter" />
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
    :hover {
      color: ${theme.colors.redSecondary};
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
