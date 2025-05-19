import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ identity: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get("http://localhost:3001/users");
      const users = res.data;
      const user = users.find(
        (u) =>
          (u.email === formData.identity || u.username === formData.identity) &&
          u.password === formData.password
      );

      if (!user) return setError("Identifiants incorrects.");

      localStorage.setItem("auth", JSON.stringify(user));
      navigate(user.role === "admin" ? "/admin" : "/user");
    } catch (err) {
      console.error(err);
      setError("Erreur serveur.");
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">🔐 Connexion à <span className="reactify">Reactify</span></h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <input
          className="form-control mb-3"
          placeholder="Email ou Nom d'utilisateur"
          value={formData.identity}
          onChange={(e) => setFormData({ ...formData, identity: e.target.value })}
        />
        <input
          className="form-control mb-3"
          type="password"
          placeholder="Mot de passe"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button className="btn btn-primary w-100 mb-2" type="submit">
          Se connecter
        </button>
        <p className="text-center">
          Pas encore inscrit ? <Link to="/register">Créer un compte</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
