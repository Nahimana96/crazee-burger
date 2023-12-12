import React from "react";
import styled from "styled-components";
import { FiCheckCircle } from "react-icons/fi";
import { theme } from "../../../../theme";

const SubmitMessage = () => {
  return (
    <StyledSubmitMessage className="submit-message">
      <span className="message">
        <FiCheckCircle />
        Ajouté avec succès
      </span>
    </StyledSubmitMessage>
  );
};
const StyledSubmitMessage = styled.div`
  .message {
    padding-left: 15px;
    color: ${theme.colors.success};
  }
`;
export default SubmitMessage;
