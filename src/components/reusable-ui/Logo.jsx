import React from "react";
import { styled } from "styled-components";
import { theme } from "../../theme";
import logo from "../../assets/F03 logo-orange.png";

const Logo = () => {
  return (
    <LogoStyled>
      <h1 className="text-logo">CRAZEE</h1>
      <img className="logo" src={logo} alt="logo-burger" />
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
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.P4};
  }
  img {
    margin: 5px;
    width: 80px;
  }
`;
export default Logo;
