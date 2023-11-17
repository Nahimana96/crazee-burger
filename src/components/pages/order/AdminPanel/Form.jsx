import React, { useContext, useState } from "react";
import TextInput from "../../../reusable-ui/TextInput";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuroSymbol } from "react-icons/md";
import styled from "styled-components";
import { theme } from "../../../../theme";
import { FiCheckCircle } from "react-icons/fi";
import AdminContext from "../../../../context/AdminContext";

const Form = () => {
  const [imageSource, setImageSource] = useState("");
  const [newProduct, setNewProduct] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const { handleAdd } = useContext(AdminContext);

  const updateData = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
    e.target.name === "imageSource" && setImageSource(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(newProduct);
    setIsFormSubmitted(true);
    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 2000);
  };
  return (
    <FormStyled onSubmit={handleSubmit}>
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
        onChange={updateData}
      />
      <TextInput
        name="imageSource"
        Icone={<BsFillCameraFill />}
        placeholder={
          "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
        }
        onChange={updateData}
      />
      <TextInput
        name="price"
        Icone={<MdOutlineEuroSymbol />}
        placeholder={"Prix"}
        onChange={updateData}
      />
      <div className="btn-wrapper">
        <button type="submit">Ajouter un produit au menu</button>
        {isFormSubmitted && (
          <p className="success">
            <FiCheckCircle /> Ajouté avec succès
          </p>
        )}
      </div>
    </FormStyled>
  );
};

const FormStyled = styled.form`
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
export default Form;
