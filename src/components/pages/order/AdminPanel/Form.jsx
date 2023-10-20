import React, { useState } from "react";
import TextInput from "../../../reusable-ui/TextInput";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuroSymbol } from "react-icons/md";
import styled from "styled-components";
import { theme } from "../../../../theme";

const Form = () => {
  const [imageSource, setImageSource] = useState("");
  return (
    <FormStyled>
      <div className="image-container">
        {imageSource ? (
          <img src={imageSource} alt="image du produit" />
        ) : (
          "Aucune image"
        )}
      </div>

      <TextInput Icone={<FaHamburger />} placeholder={"Nom du produit"} />
      <TextInput
        Icone={<BsFillCameraFill />}
        placeholder={
          "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
        }
        onChange={(e) => setImageSource(e.target.value)}
      />
      <TextInput Icone={<MdOutlineEuroSymbol />} placeholder={"Prix"} />
      <button type="submit">Ajouter un produit au menu</button>
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
  button {
    grid-column-start: 2;
    background-color: ${theme.colors.success};
    font-weight: ${theme.weights.bold};
    color: white;
    border: 1px solid ${theme.colors.success};
    border-radius: 5px;
    max-width: 275px;
    height: 100%;
  }
`;
export default Form;
