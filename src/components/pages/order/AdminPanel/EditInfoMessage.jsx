import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";

const EditInfoMessage = () => {
  return (
    <EditInfoMessageStyled>
      <p>
        Cliquer sur un produit du menu pour le modifier{" "}
        <span>en temps réel</span>
      </p>
    </EditInfoMessageStyled>
  );
};

const EditInfoMessageStyled = styled.div`
  font-family: Open Sans;
  font-size: ${theme.fonts.P0};
  grid-column-start: 2;
  color: ${theme.colors.primary};
  span {
    text-decoration: underline;
  }
`;
export default EditInfoMessage;
