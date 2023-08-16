import React from "react";
import { styled } from "styled-components";
import { theme } from "../../theme";

const TextInput = ({ value, onChange, Icone, ...extraProps }) => {
  return (
    <InputStyled className="wrapper">
      {Icone && Icone}
      <input value={value} onChange={onChange} type="text" {...extraProps} />
    </InputStyled>
  );
};

const InputStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: ${theme.colors.white};
  width: 100%;
  margin-bottom: 18px;
  padding: 18px 20px;
  border-radius: ${theme.borderRadius.round};

  .icon {
    color: ${theme.colors.greySemiDark};
  }
  input {
    width: 100%;
    box-sizing: border-box;
    margin-left: 10px;
    border: none;
    font-size: ${theme.fonts.P0};
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: ${theme.colors.greyExtraLight};
    }
  }
`;
export default TextInput;
