import React, { useContext } from "react";

import styled from "styled-components";
import { theme } from "../../../../theme";
import AdminContext from "../../../../context/AdminContext";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../reusable-ui/TextInput";
import { getInputTextConfig } from "./inputTextConfig";
import { FaHamburger } from "react-icons/fa";
import HintMessage from "./HintMessage";

const EditForm = () => {
  const { productToEdit, inputRef } = useContext(AdminContext);
  const inputTexts = getInputTextConfig(productToEdit);

  return (
    <EditFormStyled>
      {Object.keys(productToEdit).length === 0 ? (
        <HintMessage />
      ) : (
        <div className="edit-form">
          <ImagePreview
            imageSource={productToEdit.imageSource}
            title={productToEdit.title}
          />
          <TextInput
            ref={inputRef}
            Icone={<FaHamburger />}
            value={productToEdit.title}
            placeholder="Nom du produit (ex: Super Burger)"
            onChange={() => {}}
          />
          {inputTexts
            .filter((input) => input.id !== 0)
            .map((input) => (
              <TextInput key={input.id} {...input} onChange={() => {}} />
            ))}
        </div>
      )}
    </EditFormStyled>
  );
};

const EditFormStyled = styled.div`
  .edit-form {
    display: grid;
    grid-template-columns: 25% 75%;
    grid-template-rows: repeat(4, 25%);
    max-width: 880px;
    height: 160px;
    column-gap: 20px;
    row-gap: 8px;

    .input-fields {
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
  }
`;
export default EditForm;
