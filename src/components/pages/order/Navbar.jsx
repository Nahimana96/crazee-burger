import React from "react";
import Logo from "../../reusable-ui/Logo";
import { styled } from "styled-components";
import { theme } from "../../../theme";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
const Navbar = ({ prenom, onClick }) => {
  const refreshPage = (e) => {
    e.preventDefault();
    window.location.reload();
  };
  return (
    <NavbarStyled>
      <Link onClick={refreshPage}>
        <Logo />
      </Link>
      <div className="right-part">
        <div className="logout-section">
          <p className="hey-user">
            Hey, <span>{prenom}</span>
          </p>
          <button className="logout" onClick={onClick}>
            {" "}
            Se déconnecter
          </button>
        </div>
        <BsPersonCircle />
      </div>
    </NavbarStyled>
  );
};
const NavbarStyled = styled.div`
  background-color: ${theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  margin: 0 auto;
  margin-top: 24px;
  width: 100%;
  max-width: 1400px;
  a {
    text-decoration: none;
    margin-left: 20px;
  }
  .right-part {
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
          border-bottom: 1px solid black;
          transition: all 0.2s ease-in-out;
        }
      }
    }
    svg {
      color: ${theme.colors.greyBlue};
      margin: 0 70px 0 15px;
      scale: 1.8;
    }
  }
`;
export default Navbar;
