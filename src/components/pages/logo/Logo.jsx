import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../theme";

const Logo = () => {
  return (
    <LogoStyled>
      <h1 className="text-logo">CRAZEE</h1>
      <img
        className="logo"
        src="src/assets/F03 logo-orange.png"
        alt="logo-burger"
      />
      <h1 className="text-logo">BURGER</h1>
    </LogoStyled>
  );
};

const LogoStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: "Amatic SC", cursive;
    color: ${theme.colors.primary_burger};
  }
`;
export default Logo;
