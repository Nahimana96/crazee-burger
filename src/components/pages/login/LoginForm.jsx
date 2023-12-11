import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { theme } from "../../../theme";
import { FaChevronRight } from "react-icons/fa";
import TextInput from "../../reusable-ui/TextInput";
import Button from "../../reusable-ui/Button";

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

      <Button
        label={"Accéder à mon espace"}
        Icone={<FaChevronRight className="icone" />}
      />
    </LoginFormStyled>
  );
};

const LoginFormStyled = styled.form`
  z-index: 1;
  h1,
  h2 {
    color: ${theme.colors.white};
    font-family: "Amatic SC", cursive;
    text-align: center;
    margin: 32px auto;
  }
  h1 {
    font-size: ${theme.fonts.P5};
  }
  h2 {
    font-size: ${theme.fonts.P4};
  }
  .orange-line {
    width: 100%;
    border: 1px solid #f56a2c;
  }
  .icone {
    transform: translateY(25%);
    margin-left: 10px;
  }
`;

export default LoginForm;
