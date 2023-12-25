import React from "react";
import styled from "styled-components";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../reusable-ui/TextInput";
import Button from "../../../reusable-ui/Button";
import SubmitMessage from "./SubmitMessage";
import { theme } from "../../../../theme";
import { getInputTextConfig } from "./inputTextConfig";

const Form = ({
  onSubmit,
  imageSource,
  onChange,
  product,
  isFormSubmitted,
}) => {
  const inputTexts = getInputTextConfig(product);

  return (
    <FormStyled onSubmit={onSubmit}>
      <ImagePreview imageSource={imageSource} title={product.title} />

      {inputTexts.map((input) => (
        <TextInput key={input.id} {...input} onChange={onChange} />
      ))}

      <div className="submit-container">
        <Button label="Ajouter un nouveau produit" version="success" />
        {isFormSubmitted && <SubmitMessage />}
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
  .submit-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    grid-column-start: 2;
  }
`;
export default Form;