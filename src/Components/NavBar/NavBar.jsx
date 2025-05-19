import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const user = JSON.parse(localStorage.getItem("auth"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to={user?.role === "admin" ? "/admin" : "/user"}>
          ⚛️ Reactify
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto gap-2">
            {user?.role === "user" && (
              <>
                <Link className="nav-link" to="/count">🧮 Compteur</Link>
                <Link className="nav-link" to="/jokes">😂 Blagues</Link>
              </>
            )}
            {user && (
              <>
                <Link className="nav-link" to={`/${user.role}`}>🏠 Dashboard</Link>
                <button className="btn btn-outline-light btn-sm ms-2" onClick={handleLogout}>
                  🚪 Déconnexion
                </button>
              </>
            )}
            {!user && (
              <>
                <Link className="nav-link" to="/">Connexion</Link>
                <Link className="nav-link" to="/register">Inscription</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
