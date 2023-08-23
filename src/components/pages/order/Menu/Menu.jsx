import React from "react";
import { useState } from "react";
import { fakeMenu2 } from "../../../../data/fakeMenu";
import PrimaryButton from "../../../reusable-ui/PrimaryButton.jsx";
import { formatPrice } from "../../../../utils/maths";
import { styled } from "styled-components";
import { theme } from "../../../../theme";
const Menu = () => {
  const [products, setProducts] = useState(fakeMenu2);
  return (
    <MenuStyled>
      {products.map((product) => {
        return (
          <div className="card" key={product.id}>
            <div className="image-product">
              <img src={product.imageSource} alt={product.title} />
            </div>
            <div className="text-info">
              <h1 className="title">{product.title}</h1>
              <div className="price-button">
                <p className="price">{formatPrice(product.price)}</p>
                <PrimaryButton className="button-ajouter" label="Ajouter" />
              </div>
            </div>
          </div>
        );
      })}
    </MenuStyled>
  );
};
const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 60px;
  row-gap: 50px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 50px 100px;
  &::-webkit-scrollbar {
    display: none;
  }
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 20px 30px 20px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    border-radius: ${theme.borderRadius.extraRound};
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
        font-family: "Amatic SC", cursive;
        font-weight: ${theme.weights.bold};
        margin-bottom: 5px;
        text-overflow: ellipsis;
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
  }
`;
export default Menu;
