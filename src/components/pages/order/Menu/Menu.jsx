import React, { useContext } from "react";
import { styled } from "styled-components";
import Product from "./Product";
import AdminContext from "../../../../context/AdminContext";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import { formatPrice } from "../../../../utils/maths.jsx";
import { theme } from "../../../../theme";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";
const Menu = () => {
  const { products, handleDelete, isModeAdmin, resetMenu } =
    useContext(AdminContext);

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
              onClick={resetMenu}
            />
          </div>
        )
      ) : (
        products.map(({ id, title, imageSource, price }) => {
          return (
            <Product
              onDelete={() => handleDelete(id)}
              key={id}
              title={title}
              imageSource={
                isValidUrl(imageSource) ? imageSource : IMAGE_BY_DEFAULT
              }
              leftDescription={formatPrice(price)}
              hasDeleteButton={isModeAdmin}
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
