import React, { useContext, useState } from "react";
import AdminContext from "../../../../context/AdminContext";
import { EMPTY_PRODUCT } from "../../../../enums/product";
import Form from "./Form";
import SubmitMessage from "./SubmitMessage";
import Button from "../../../reusable-ui/Button";

const AddForm = () => {
  const [imageSource, setImageSource] = useState("");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const { handleAdd } = useContext(AdminContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      // dynamic property name [e.target.name]
      [name]: value,
    });
    name === "imageSource" && setImageSource(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };
    // add the new product
    handleAdd(newProductToAdd);
    // clear all input values
    setNewProduct(EMPTY_PRODUCT);
    // clear imageSource
    setImageSource("");
    displaySuccessMessage();
  };

  const displaySuccessMessage = () => {
    // set isFormSubmitted to true to show success message
    setIsFormSubmitted(true);

    // set isFormSubmitted to false after 2s to hide success message
    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 2000);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      onChange={handleChange}
      imageSource={imageSource}
      product={newProduct}
      QUELQUECHOSE={
        <>
          <Button label="Ajouter un nouveau produit" version="success" />
          {isFormSubmitted && <SubmitMessage />}
        </>
      }
    />
  );
};

export default AddForm;
