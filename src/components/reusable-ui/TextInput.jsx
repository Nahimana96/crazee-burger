import React from "react";
import { styled } from "styled-components";
import { theme } from "../../theme";

const TextInput = React.forwardRef(
  ({ value, onChange, Icone, ...extraProps }, ref) => {
    return (
      <TextInputStyled className="input-fields">
        {Icone && Icone}
        <input
          value={value}
          onChange={onChange}
          type="text"
          ref={ref}
          {...extraProps}
        />
      </TextInputStyled>
    );
  }
);

const TextInputStyled = styled.div`
  display: flex;
  justify-content: flex-start;

  background-color: ${theme.colors.white};
  width: 100%;
  margin-bottom: 18px;
  padding: 18px 20px;
  border-radius: ${theme.borderRadius.round};

  .icon {
    color: ${theme.colors.greySemiDark};
    display: flex;
    align-items: center;
  }
  input {
    width: 100%;
    box-sizing: border-box;
    margin-left: 10px;
    border: none;
    font-size: ${theme.fonts.P0};
    font-family: "Open Sans", sans-serif;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: ${theme.colors.greyExtraLight};
      font-size: 13px;
    }
  }
`;
export default TextInput;
