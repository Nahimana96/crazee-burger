import React, { useContext, useState } from "react";
import AdminContext from "../../../../context/AdminContext";
import { EMPTY_PRODUCT } from "../../../../enums/product";
import Form from "./Form";
import SubmitButton from "./SubmitButton";
import { useSuccessMessage } from "../../../../hooks/useSuccessMessage";

const AddForm = () => {
  const [imageSource, setImageSource] = useState("");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const { handleAdd } = useContext(AdminContext);
  const { isFormSubmitted, displaySuccessMessage } = useSuccessMessage();
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

  return (
    <Form
      onSubmit={handleSubmit}
      onChange={handleChange}
      imageSource={imageSource}
      product={newProduct}
    >
      <SubmitButton isFormSubmitted={isFormSubmitted} />
    </Form>
  );
};

export default AddForm;
