import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>ErrorPage</h1>
      <button onClick={handleClick}>Retourner à la page d'accueil</button>
    </div>
  );
};

export default NotFound;
<h1>Not found</h1>;
