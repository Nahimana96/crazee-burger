import React, { useContext } from "react";
import Logo from "../../../reusable-ui/Logo";
import { styled } from "styled-components";
import { theme } from "../../../../theme";
import { Link } from "react-router-dom";
import Profil from "./Profil";
import { refreshPage } from "../../../../utils/window";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { toast } from "react-toastify";
import ToastAdmin from "./ToastAdmin";
import AdminContext from "../../../../context/AdminContext";

const Navbar = () => {
  const { isModeAdmin, setIsModeAdmin } = useContext(AdminContext);
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
        <Profil />
        <ToastAdmin />
      </div>
    </NavbarStyled>
  );
};
const NavbarStyled = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-end: 2;
  background-color: ${theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  width: 100%;
  a {
    text-decoration: none;
    margin-left: 20px;
  }
  .right-part {
    display: flex;
  }
`;
export default Navbar;
