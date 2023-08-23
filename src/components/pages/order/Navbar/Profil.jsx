import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../../../theme";

const Profil = ({ prenom }) => {
  return (
    <ProfilStyled>
      <div className="logout-section">
        <p className="hey-user">
          Hey, <span>{prenom}</span>
        </p>
        <Link to={"/"}>
          <button className="logout">Se déconnecter</button>
        </Link>
      </div>
      <BsPersonCircle />
    </ProfilStyled>
  );
};

const ProfilStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .logout-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    .logout,
    p {
      margin: 0;
      font-family: "Open Sans", sans-serif;
      color: ${theme.colors.greyBlue};
    }
    > p {
      font-size: ${theme.fonts.P0};
      span {
        font-weight: ${theme.weights.bold};
        color: ${theme.colors.primary};
      }
    }
    .logout {
      border: 1px solid white;
      background: none;
      padding: 0;
      font-size: ${theme.fonts.XXS};
      transition: all 0.2s ease-in-out;
      &:hover {
        border-bottom: 1px solid ${theme.colors.greyDark};
        transition: all 0.2s ease-in-out;
      }
    }
  }
  svg {
    color: ${theme.colors.greyBlue};
    margin: 0 70px 0 15px;
    scale: 1.8;
  }
`;
export default Profil;
