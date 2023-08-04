import React, { useEffect, useState } from "react";

const Login = () => {
  const [prenom, setPrenom] = useState("");

  //   comportement
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bonjour ${prenom}`);
    setPrenom("");
  };
  const handleChange = (e) => {
    setPrenom(e.target.value);
  };

  return (
    <div>
      <h1>
        Bienvenue chez nous ! <br />
        <span>Connectez-vous</span>
      </h1>
      <form action="#" onSubmit={handleSubmit}>
        <input
          value={prenom}
          type="text"
          placeholder="entrer votre prénom..."
          required={true}
          onChange={handleChange}
        />
        <button type="submit">Accédez à votre espace</button>
      </form>
    </div>
  );
};

export default Login;
