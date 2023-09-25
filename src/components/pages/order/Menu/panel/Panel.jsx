import React from "react";
import styled from "styled-components";

const Panel = () => {
  return <PanelStyled>Hello</PanelStyled>;
};

const PanelStyled = styled.div`
  position: absolute;
  padding: 20px;
  width: 100%;
  height: 250px;
  left: 0;
  bottom: 0;
  background-color: green;
  border-radius: 0px 0px 15px 15px;
`;

export default Panel;
