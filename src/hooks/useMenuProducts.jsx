import { useState } from "react";
import { deepClone } from "../utils/array";
import { fakeMenu2 } from "../data/fakeMenu";

export const useMenuProducts = () => {
  const [products, setProducts] = useState(fakeMenu2);
  const resetMenu = () => {
    setProducts(fakeMenu2);
  };

  // gestionnaires du state
  const handleAdd = (newProduct) => {
    // copie du state
    const copyOfProducts = deepClone(products);

    // manipulation de la copie
    const productsUpdated = [newProduct, ...copyOfProducts];

    // update du state
    setProducts(productsUpdated);
  };

  const handleDelete = (idOfProductToDelete) => {
    // copie du state
    const copyOfProducts = deepClone(products);

    // manipulation de la copie
    const productsUpdated = copyOfProducts.filter(
      (product) => product.id !== idOfProductToDelete
    );

    // update du state
    setProducts(productsUpdated);
    productToEdit.id === idOfProductToDelete && setProductToEdit({});
  };

  const handleEdit = (productBeingEdited) => {
    // copie du state (deep clone)
    const copyOfProducts = deepClone(products);

    // manip de la copie du state
    const indexOfProductToEdit = copyOfProducts.findIndex(
      (product) => product.id === productBeingEdited.id
    );

    copyOfProducts[indexOfProductToEdit] = productBeingEdited;

    // update du state
    setProducts(copyOfProducts);
  };
  return {
    products,
    setProducts,
    resetMenu,
    handleAdd,
    handleEdit,
    handleDelete,
  };
};
