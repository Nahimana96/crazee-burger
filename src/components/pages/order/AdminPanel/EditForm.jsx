import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import AdminContext from "../../../../context/AdminContext";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../reusable-ui/TextInput";
import { getInputTextConfig } from "./inputTextConfig";
import HintMessage from "./HintMessage";

const EditForm = () => {
  const { productToEdit, setProductToEdit, handleEdit, titleEditRef } =
    useContext(AdminContext);
  const inputTexts = getInputTextConfig(productToEdit);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const productBeingUpdated = { ...productToEdit, [name]: value };
    setProductToEdit(productBeingUpdated);

    handleEdit(productBeingUpdated);
  };
  return (
    <EditFormStyled>
      {productToEdit.id == undefined ? (
        <HintMessage />
      ) : (
        <div className="edit-form">
          <ImagePreview
            imageSource={productToEdit.imageSource}
            title={productToEdit.title}
          />

          {inputTexts.map((input) => (
            <TextInput
              key={input.id}
              {...input}
              onChange={handleChange}
              ref={input.name === "title" ? titleEditRef : null}
            />
          ))}

          <div className="message">
            <p>
              Cliquer sur un produit du menu pour le modifier{" "}
              <span>en temps réel</span>
            </p>
          </div>
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
    .message {
      font-family: Open Sans;
      font-size: ${theme.fonts.P0};
      grid-column-start: 2;
      color: ${theme.colors.primary};
      span {
        text-decoration: underline;
      }
    }
  }
`;
export default EditForm;
