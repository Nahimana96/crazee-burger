import React from "react";
import { styled } from "styled-components";
import { theme } from "../../theme";

const PrimaryButton = ({ label, Icone, className, onClick }) => {
  return (
    <PrimaryButtonStyled className={className} onClick={onClick}>
      <span>{label}</span>
      {Icone && Icone}
    </PrimaryButtonStyled>
  );
};

const PrimaryButtonStyled = styled.button`
  padding: 18px;
  border: 1px solid ${theme.colors.primary};
  color: ${theme.colors.white};
  font-weight: ${theme.weights.bold};
  background-color: ${theme.colors.primary};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
  width: 100%;

  &:hover {
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    background-color: ${theme.colors.white};
    transition: all 0.2s ease-in-out;
  }
`;
export default PrimaryButton;
