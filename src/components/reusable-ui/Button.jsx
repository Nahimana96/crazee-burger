import React from "react";
import { css, styled } from "styled-components";
import { theme } from "../../theme";

const Button = ({ label, Icone, className, onClick, version = "normal" }) => {
  return (
    <ButtonStyled className={className} onClick={onClick} version={version}>
      <span>{label}</span>
      {Icone && Icone}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  color: ${theme.colors.white};
  font-weight: ${theme.weights.bold};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 5px;

  ${({ version }) => extraStyle[version]}
`;

const extraStyleNormal = css`
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  width: 100%;
  padding: 18px;
  &:hover {
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    background-color: ${theme.colors.white};
    transition: all 0.2s ease-in-out;
  }
`;
const extraStyleMinimalist = css`
  width: 275px;
  padding: 10px 30px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.success};
  border: 1px solid ${theme.colors.success};

  &:hover {
    color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
    background-color: ${theme.colors.white};
    transition: all 0.2s ease-in-out;
  }
  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }
`;
const extraStyle = {
  normal: extraStyleNormal,
  success: extraStyleMinimalist,
};
export default Button;
