import React from "react";
import LoginForm from "./LoginForm";
import { styled } from "styled-components";
import Logo from "../logo/Logo";
import { theme } from "../../../theme";
import background from "../../../assets/F03 burger-background.jpg";

const LoginPage = () => {
  return (
    <LoginPageStyled>
      <Logo />
      <LoginForm />
    </LoginPageStyled>
  );
};

const LoginPageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: ${theme.colors.dark};
  &::before {
    content: "";
    opacity: 0.7;
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("${background}") no-repeat center;
    background-size: cover;
    z-index: 0;
  }
  .logo {
    width: 200px;
    height: 150px;
    z-index: 1;
  }
  .text-logo {
    font-size: 110px;
    font-weight: ${theme.weights.bold};
    z-index: 1;
  }
`;

export default LoginPage;
