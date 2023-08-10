import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../../theme";
import { BsPersonCircle } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
const LoginForm = () => {
  // state
  const [prenom, setPrenom] = useState("");
  const navigate = useNavigate();
  //   comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/order/${prenom}`);
    setPrenom("");
  };
  const handleChange = (e) => {
    setPrenom(e.target.value);
  };

  return (
    <LoginFormStyled action="#" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <div className="orange-line"></div>
      <br />
      <h2>Connectez-vous</h2>
      <div className="wrapper">
        <div className="icon">
          <BsPersonCircle />
        </div>
        <input
          value={prenom}
          type="text"
          placeholder="Entrez votre prénom"
          required
          onChange={handleChange}
        />
      </div>

      <button type="submit">
        Accédez à mon espace <FaChevronRight />
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
  .wrapper,
  button {
    border-radius: 5px;
    width: 100%;
  }
  input {
    box-sizing: border-box;
    margin-left: 50px;
    border: none;
    font-size: ${theme.fonts.P0};
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #d3d3d3;
    }
  }
  button {
    padding: 18px;
    border: 1px solid ${theme.colors.primary_burger};
    color: ${theme.colors.white};
    font-weight: ${theme.weights.bold};
    background-color: ${theme.colors.primary_burger};
    cursor: pointer;
    transition: all 0.3s ease-in-out;

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
  .wrapper {
    background-color: ${theme.colors.white};
    width: 100%;
    position: relative;
    margin-bottom: 18px;
    padding: 18px 0;

    .icon {
      position: absolute;
      left: 34px;
      top: 50%;
      color: ${theme.colors.greySemiDark};
      transform: translate(-50%, -50%);
    }
  }
`;

export default LoginForm;
