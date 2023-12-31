import React, { useContext } from "react";
import { theme } from "../../../../theme";
import styled from "styled-components";
import AdminContext from "../../../../context/AdminContext";

const BasketContent = () => {
  const { productsInBasket } = useContext(AdminContext);
  return (
    <BasketContentStyled>
      <div className={productsInBasket.length === 0 ? "flex" : "no-flex"}>
        {productsInBasket.length === 0 ? (
          <span>Votre panier est vide</span>
        ) : (
          productsInBasket.map(
            ({ title, imageSource, price, quantity }, index) => (
              <article key={index}>
                <span className="title">{title}</span>
                <span>{quantity}</span>
                {/* <img src={imageSource} alt={title} /> */}
                <span className="price">{price}</span>
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
  }
  .no-flex {
    margin: 20px;
    height: 100%;
    article {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 20px;
      background-color: blue;
      .title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 140px;
      }
    }
  }
  span {
    color: ${theme.colors.greyBlue};
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.P4};
  }
`;
export default BasketContent;
