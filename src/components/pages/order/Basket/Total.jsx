import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Header from "../../../reusable-ui/Header";

const Total = ({ amountToPay }) => {
  return (
    <Header>
      <TotalStyled>
        <span className="total">Total</span>
        <span className="amount">{amountToPay}</span>
      </TotalStyled>
    </Header>
  );
};

const TotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  span {
    font-size: ${theme.fonts.P4};
    color: ${theme.colors.primary};
    font-weight: ${theme.weights.bold};
    font-family: "Amatic SC", cursive;
    letter-spacing: 2px;
  }
`;
export default Total;
