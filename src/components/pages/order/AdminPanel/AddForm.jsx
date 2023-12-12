import React, { useContext, useState } from "react";
import TextInput from "../../../reusable-ui/TextInput";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuroSymbol } from "react-icons/md";
import styled from "styled-components";
import { theme } from "../../../../theme";
import { FiCheckCircle } from "react-icons/fi";
import AdminContext from "../../../../context/AdminContext";
import Button from "../../../reusable-ui/Button";
import ImagePreview from "./ImagePreview";

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: "",
};
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
    // set isFormSubmitted to true to show success message
    setIsFormSubmitted(true);
    // clear imageSource
    setImageSource("");
    // set isFormSubmitted to false after 2s to hide success message
    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 2000);
  };
  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview imageSource={imageSource} title={newProduct.title} />
      <TextInput
        name="title"
        Icone={<FaHamburger />}
        placeholder={"Nom du produit (ex: Super Burger)"}
        onChange={handleChange}
        value={newProduct.title}
      />
      <TextInput
        name="imageSource"
        Icone={<BsFillCameraFill />}
        placeholder={
          "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
        }
        value={newProduct.imageSource}
        onChange={handleChange}
      />
      <TextInput
        name="price"
        Icone={<MdOutlineEuroSymbol />}
        placeholder={"Prix"}
        onChange={handleChange}
        value={newProduct.price}
      />
      <div className="btn-wrapper">
        <Button label="Ajouter un nouveau produit" version="success" />
        {isFormSubmitted && (
          <p className="success">
            <FiCheckCircle /> Ajouté avec succès
          </p>
        )}
      </div>
    </AddFormStyled>
  );
};

const AddFormStyled = styled.form`
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: repeat(4, 25%);
  max-width: 880px;
  height: 160px;
  column-gap: 20px;
  row-gap: 8px;

  .wrapper {
    grid-column-start: 2;
    height: 100%;
    align-items: center;
    background-color: ${theme.colors.greyLight};
    input {
      background-color: ${theme.colors.greyLight};
    }
    input::placeholder {
      color: ${theme.colors.greyMedium};
    }
    svg {
      color: ${theme.colors.greyBlue};
    }
  }

  .btn-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    grid-column-start: 2;
    p {
      padding-left: 15px;
      color: ${theme.colors.success};
    }
  }
`;
export default AddForm;
