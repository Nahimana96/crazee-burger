import React, { useContext } from "react";
import { styled } from "styled-components";
import Product from "./Product";
import AdminContext from "../../../../context/AdminContext";
import { fakeMenu2 } from "../../../../data/fakeMenu";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import { theme } from "../../../../theme";

const Menu = () => {
  const { products, setProducts, isModeAdmin } = useContext(AdminContext);
  const deleteProduct = (id) => {
    const copyOfProducts = [...products];
    const productsUpdated = copyOfProducts.filter(
      (product) => product.id !== id
    );
    setProducts(productsUpdated);
  };
  const isValidUrl = (imageUrl) => {
    const imageUrlRegex = /\.(jpeg|jpg|gif|png)$/i;
    return imageUrlRegex.test(imageUrl);
  };

  return (
    <MenuStyled className={products.length == 0 && "when-empty"}>
      {products.length == 0 ? (
        !isModeAdmin ? (
          <div className="menu-vide">
            <p>
              <strong>Victime de notre succès ! :D</strong>
            </p>{" "}
            <br />
            <p>De nouvelles recettes sont en cours de préparation.</p> <br />
            <p>À très vite !</p>
          </div>
        ) : (
          <div className="menu-vide">
            <p>
              <strong> Le menu est vide ?</strong>
            </p>
            <p>Cliquez ci-dessous pour le réinitialiser</p>
            <PrimaryButton
              label={"Générer de nouveaux produits"}
              onClick={() => setProducts(fakeMenu2)}
            />
          </div>
        )
      ) : (
        products.map((product) => {
          return (
            <Product
              onClick={() => deleteProduct(product.id)}
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
