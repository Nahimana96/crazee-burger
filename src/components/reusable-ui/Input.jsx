import React from "react";
import { styled } from "styled-components";
import { theme } from "../../theme";

const Input = ({ value, onChange, Icone, ...extraProps }) => {
  return (
    <InputStyled className="wrapper">
      {Icone && Icone}
      <input value={value} onChange={onChange} type="text" {...extraProps} />
    </InputStyled>
  );
};

const InputStyled = styled.div`
  background-color: ${theme.colors.white};
  width: 100%;
  position: relative;
  margin-bottom: 18px;
  padding: 18px 0;

  .icon {
    position: absolute;
    left: 34px;
    top: 50%;
    color: ${theme.colors.greySemiDark};
    transform: translate(-50%, -50%);
  }
  input {
    box-sizing: border-box;
    margin-left: 50px;
    border: none;
    font-size: ${theme.fonts.P0};
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #d3d3d3;
    }
  }
`;
export default Input;
