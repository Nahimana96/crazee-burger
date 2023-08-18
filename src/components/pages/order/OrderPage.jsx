import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";

const OrderPage = () => {
  const { prenom } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <Navbar prenom={prenom} onClick={handleClick} />
    </div>
  );
};

export default OrderPage;
