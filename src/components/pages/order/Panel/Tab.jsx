import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";

const Tab = ({ onClick, className, text, icone }) => {
  return (
    <TabStyled onClick={onClick} className={className}>
      {icone}
      <span>{text}</span>
    </TabStyled>
  );
};
const TabStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  color: ${theme.colors.greySemiDark};
  padding: 10px 22px;
  border-radius: 5px 5px 0 0;
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);
  background-color: ${theme.colors.background_white};
  cursor: pointer;

  span:hover {
    text-decoration: underline;
  }
`;
export default Tab;
