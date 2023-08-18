import React from "react";
import Logo from "../../reusable-ui/Logo";
const Navbar = ({ prenom, onClick }) => {
  return (
    <div>
      <Logo />
      <h1>Hey, {prenom}</h1>
      <button onClick={onClick}> Déconnexion</button>
    </div>
  );
};

export default Navbar;
