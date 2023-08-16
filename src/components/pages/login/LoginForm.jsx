import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { theme } from "../../../theme";
import { FaChevronRight } from "react-icons/fa";
import TextInput from "../../reusable-ui/TextInput";

const LoginForm = () => {
  // state
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  //   comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/order/${inputValue}`);
    setInputValue("");
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <LoginFormStyled action="#" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <div className="orange-line"></div>
      <br />
      <h2>Connectez-vous</h2>
      <TextInput
        value={inputValue}
        onChange={handleChange}
        Icone={
          <div className="icon">
            <BsPersonCircle />
          </div>
        }
        placeholder="Entrez votre prénom"
        required
      />

      <button type="submit">
        Accéder à mon espace <FaChevronRight />
      </button>
    </LoginFormStyled>
  );
};

const LoginFormStyled = styled.form`
  * {
    box-sizing: border-box;
  }
  z-index: 1;

  h1,
  h2 {
    font-size: ${theme.fonts.P5};
    color: ${theme.colors.white};
    font-family: "Amatic SC", cursive;
    text-align: center;
  }
  h2 {
    font-size: ${theme.fonts.P4};
  }
  .orange-line {
    width: 100%;
    border: 1px solid #f56a2c;
  }
  button {
    padding: 18px;
    border: 1px solid ${theme.colors.primary_burger};
    color: ${theme.colors.white};
    font-weight: ${theme.weights.bold};
    background-color: ${theme.colors.primary_burger};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border-radius: 5px;
    width: 100%;

    &:hover {
      color: ${theme.colors.primary_burger};
      border: 1px solid ${theme.colors.primary_burger};
      background-color: ${theme.colors.white};
      transition: all 0.3s ease-in-out;
    }
    svg {
      transform: translateY(25%);
      margin-left: 10px;
    }
  }
`;

export default LoginForm;
