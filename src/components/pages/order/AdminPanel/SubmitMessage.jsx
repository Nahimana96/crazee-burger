import React from "react";
import styled from "styled-components";
import { FiCheckCircle } from "react-icons/fi";
import { theme } from "../../../../theme";

const SubmitMessage = () => {
  return (
    <StyledSubmitMessage className="submit-message">
      <FiCheckCircle />
      <span>Ajouté avec succès</span>
    </StyledSubmitMessage>
  );
};
const StyledSubmitMessage = styled.div`
  padding-left: 15px;
  color: ${theme.colors.success};
  span {
    padding-left: 5px;
  }
`;
export default SubmitMessage;
