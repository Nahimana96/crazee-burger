import React from "react";
import { useState } from "react";
import { fakeMenu2 } from "../../../../data/fakeMenu";
import PrimaryButton from "../../../reusable-ui/PrimaryButton.jsx";
import { formatPrice } from "../../../../utils/maths";
const Menu = () => {
  const [products, setProducts] = useState(fakeMenu2);
  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <img src={product.imageSource} alt={product.title} />
            <div className="text-info">
              <h1>{product.title}</h1>
              <div className="price-button">
                <p>{formatPrice(product.price)}</p>
                <PrimaryButton label="Ajouter" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
