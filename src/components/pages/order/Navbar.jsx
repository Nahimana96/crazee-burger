import React from "react";
import Logo from "../../reusable-ui/Logo";
import { styled } from "styled-components";
import { theme } from "../../../theme";
import { Link } from "react-router-dom";
import Profil from "./Profil";
const Navbar = ({ prenom }) => {
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
        <Profil prenom={prenom} />
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
`;
export default Navbar;
