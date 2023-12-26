import React from "react";
import styled from "styled-components";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../reusable-ui/TextInput";
import { theme } from "../../../../theme";
import { getInputTextConfig } from "./inputTextConfig";

const Form = React.forwardRef(
  ({ onSubmit, imageSource, onChange, product, children }, ref) => {
    const inputTexts = getInputTextConfig(product);

    return (
      <FormStyled onSubmit={onSubmit}>
        <ImagePreview imageSource={imageSource} title={product.title} />

        {inputTexts.map((input) => (
          <TextInput
            key={input.id}
            {...input}
            onChange={onChange}
            ref={ref && input.name === "title" ? ref : null}
          />
        ))}

        <div className="form-footer">{children}</div>
      </FormStyled>
    );
  }
);

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 210px 650px;
  grid-template-rows: repeat(4, 40px);
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
  .form-footer {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    grid-column-start: 2;
  }
`;
export default Form;
