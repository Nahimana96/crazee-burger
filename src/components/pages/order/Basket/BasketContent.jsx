import React, { useContext, useState } from "react";
import { theme } from "../../../../theme";
import styled from "styled-components";
import AdminContext from "../../../../context/AdminContext";
import { formatPrice } from "../../../../utils/maths";
import { MdDeleteForever } from "react-icons/md";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";
const BasketContent = () => {
  const { productsInBasket, handleDeleteBasket } = useContext(AdminContext);

  return (
    <BasketContentStyled>
      <div className={productsInBasket.length === 0 ? "flex" : "no-flex"}>
        {productsInBasket.length === 0 ? (
          <span>Votre panier est vide</span>
        ) : (
          productsInBasket.map(
            ({ id, title, imageSource, price, quantity }, index) => (
              <article key={index} className="added_product">
                <div className="image_container">
                  <img
                    src={imageSource ? imageSource : IMAGE_BY_DEFAULT}
                    alt={title}
                  />
                </div>
                <div className="title_and_price_container">
                  <span
                    className="title"
                    style={title ? { opacity: 1 } : { opacity: 0 }}
                  >
                    {title ? title : "empty"}
                  </span>
                  <span className="price">
                    {price ? formatPrice(price) : formatPrice(0)}
                  </span>
                </div>
                <span className="quantity">x {quantity}</span>
                <div
                  className="delete_button"
                  onClick={() => handleDeleteBasket(id)}
                >
                  <MdDeleteForever />
                </div>
              </article>
            )
          )
        )}
      </div>
    </BasketContentStyled>
  );
};

const BasketContentStyled = styled.div`
  flex: 1;
  background-color: ${theme.colors.background_white};
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2) inset;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    span {
      font-family: "Amatic SC";
      font-size: ${theme.fonts.P4};
      color: ${theme.colors.greyBlue};
    }
  }
  .no-flex {
    margin: 20px 16px;
    height: 100%;
    .added_product {
      position: relative;
      width: 100%;
      height: 86px;
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 20px;
      padding: 8px 16px;
      box-shadow: -4px 4px 15px 0px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      overflow: hidden;
      user-select: none;
      &:hover {
        .delete_button {
          transform: translate(0%);
          transition: all 0.2s ease-in-out;
        }
      }
      .image_container {
        width: 85px;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      .title_and_price_container {
        width: 120px;
        display: flex;
        flex-direction: column;
        .title {
          display: block;
          white-space: nowrap;
          font-family: "Amatic SC";
          font-weight: ${theme.weights.bold};
          font-size: ${theme.fonts.P3};
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
        }
      }
      .price,
      .quantity {
        font-size: ${theme.fonts.P0};
        font-family: "Open Sans";
        color: ${theme.colors.primary};
        font-weight: ${theme.weights.regular};
      }
      .delete_button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 76px;
        height: 100%;
        background-color: ${theme.colors.red};
        color: white;
        position: absolute;
        right: 0;
        transform: translateX(100%);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        svg {
          width: 24px;
          height: 24px;
        }
        &:hover {
          color: black;
        }
        &:active {
          color: white;
        }
      }
      .hide {
        transform: translateX(100%);
      }
    }
  }
`;
export default BasketContent;
