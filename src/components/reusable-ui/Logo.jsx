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
    color: ${theme.colors.primary_burger};
  }
  img {
    margin: 10px;
  }
`;
export default Logo;
