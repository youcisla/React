import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    prenom: "",
    nom: "",
    username: "",
    password: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(formData).some((v) => v.trim() === "")) {
      return setError("Tous les champs sont obligatoires.");
    }

    try {
      const existing = await axios.get(`http://localhost:3001/users?email=${formData.email}`);
      if (existing.data.length > 0) return setError("Email déjà utilisé.");

      await axios.post("http://localhost:3001/users", { ...formData, role: "user" });
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Erreur serveur.");
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">📝 Inscription <span className="reactify">Reactify</span></h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {["email", "prenom", "nom", "username", "password"].map((field) => (
          <input
            key={field}
            className="form-control mb-3"
            name={field}
            type={field === "password" ? "password" : "text"}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={formData[field]}
            onChange={handleChange}
          />
        ))}
        <button className="btn btn-success w-100 mb-2" type="submit">
          S'inscrire
        </button>
        <p className="text-center">
          Déjà un compte ? <Link to="/">Se connecter</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
