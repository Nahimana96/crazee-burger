import React, { useContext, useState } from "react";
import TextInput from "../../../reusable-ui/TextInput";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuroSymbol } from "react-icons/md";
import styled from "styled-components";
import { theme } from "../../../../theme";
import { FiCheckCircle } from "react-icons/fi";
import AdminContext from "../../../../context/AdminContext";

const AddForm = () => {
  const [imageSource, setImageSource] = useState("");
  const [newProduct, setNewProduct] = useState({
    title: "",
    imageSource: "",
    price: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const { handleAdd } = useContext(AdminContext);

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      // dynamic property name [e.target.name]
      [e.target.name]: e.target.value,
    });
    e.target.name === "imageSource" && setImageSource(e.target.value);
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
    setNewProduct({
      title: "",
      imageSource: "",
      price: "",
    });
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
      <div className="image-container">
        {imageSource ? (
          <img src={imageSource} alt="image du produit" />
        ) : (
          "Aucune image"
        )}
      </div>
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
        <button type="submit">Ajouter un produit au menu</button>
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
  .image-container {
    grid-row: 1 / span 3;
    display: flex;
    color: ${theme.colors.greySemiDark};
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 5px;
    border: 1px solid ${theme.colors.greyLight};
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }
  .btn-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    grid-column-start: 2;
    button {
      background-color: ${theme.colors.success};
      font-weight: ${theme.weights.bold};
      color: white;
      border: 1px solid ${theme.colors.success};
      border-radius: 5px;
      width: 275px;
      height: 100%;
      cursor: pointer;
    }
    p {
      padding-left: 15px;
      color: ${theme.colors.success};
    }
  }
`;
export default AddForm;
