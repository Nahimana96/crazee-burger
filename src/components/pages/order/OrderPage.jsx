import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const OrderPage = () => {
  const { prenom } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Bonjour {prenom}</h1>
      <button onClick={handleClick}> Déconnexion</button>
    </div>
  );
};

export default OrderPage;
