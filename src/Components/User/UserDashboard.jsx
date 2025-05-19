import React from "react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const user = JSON.parse(localStorage.getItem("auth"));

  return (
    <div className="container py-5 text-center">
      <h2>👋 Bienvenue {user.prenom} {user.nom}</h2>
      <p>Email : {user.email}</p>
      <p>Nom d'utilisateur : {user.username}</p>
      <p>Rôle : {user.role}</p>

      <div className="mt-4 d-flex justify-content-center gap-4">
        <Link to="/count" className="btn btn-primary">
          🧮 Voir le compteur
        </Link>
        <Link to="/jokes" className="btn btn-warning">
          😂 Voir les blagues
        </Link>
      </div>
    </div>
  );
};

export default UserDashboard;
