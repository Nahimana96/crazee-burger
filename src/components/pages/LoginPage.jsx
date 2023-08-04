import React, { useState } from "react";

const LoginPage = () => {
  // state
  const [prenom, setPrenom] = useState("");

  //   comportements
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
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <form action="#" onSubmit={handleSubmit}>
        <input
          value={prenom}
          type="text"
          placeholder="entrer votre prénom..."
          required
          onChange={handleChange}
        />
        <button type="submit">Accédez à votre espace</button>
      </form>
    </div>
  );
};

export default LoginPage;
