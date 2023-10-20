import React from "react";
import TextInput from "../../../reusable-ui/TextInput";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuroSymbol } from "react-icons/md";
import styled from "styled-components";
import { theme } from "../../../../theme";

const Form = () => {
  return (
    <FormStyled>
      <div className="image-container">
        <img src="" alt="image du produit" />
      </div>
      <div className="text-container">
        <TextInput Icone={<FaHamburger />} placeholder={"nom du produit"} />
        <TextInput
          Icone={<BsFillCameraFill />}
          placeholder={
            "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          }
        />
        <TextInput Icone={<MdOutlineEuroSymbol />} placeholder={"Prix"} />
        <button type="submit">Ajouter un produit au menu</button>
      </div>
    </FormStyled>
  );
};

const FormStyled = styled.form`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  column-gap: 20px;
  .text-container {
    div {
      width: 605px;
      height: 19px;
      align-items: center;
      input ::placeholder {
        color: ${theme.colors.greyMedium};
      }
    }
  }
  .image-container {
    display: center;
    justify-content: center;
    align-items: center;
    width: 215px;
    height: 100%;
    border-radius: 5px;
    border: 1px solid ${theme.colors.greyLight};
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
export default Form;
