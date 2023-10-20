import React from "react";
import Logo from "../../../reusable-ui/Logo";
import { styled } from "styled-components";
import { theme } from "../../../../theme";
import { Link } from "react-router-dom";
import Profil from "./Profil";
import { refreshPage } from "../../../../utils/window";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { toast } from "react-toastify";
import ToastAdmin from "./ToastAdmin";

const Navbar = ({ prenom, isModeAdmin, setIsModeAdmin }) => {
  const onToggle = () => {
    !isModeAdmin &&
      toast.info("Mode admin activé", {
        // icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    setIsModeAdmin(!isModeAdmin);
  };
  return (
    <NavbarStyled>
      <Link onClick={refreshPage}>
        <Logo />
      </Link>
      <div className="right-part">
        <ToggleButton
          onToggle={onToggle}
          isChecked={isModeAdmin}
          labelIfChecked="DÉSACTIVER LE MODE ADMIN"
          labelIfUnchecked="ACTIVER LE MODE ADMIN"
        />
        <Profil prenom={prenom} />
        <ToastAdmin />
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
  }
`;
export default Navbar;
