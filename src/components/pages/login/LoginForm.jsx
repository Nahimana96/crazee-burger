import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  // state
  const [prenom, setPrenom] = useState("");
  const navigate = useNavigate();
  //   comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`Bonjour ${prenom}`);
    navigate(`/order/${prenom}`);
    setPrenom("");
  };
  const handleChange = (e) => {
    setPrenom(e.target.value);
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        value={prenom}
        type="text"
        placeholder="entrer votre prénom..."
        required
        onChange={handleChange}
      />
      <button type="submit">Accédez à votre espace</button>
    </form>
  );
};

export default LoginForm;