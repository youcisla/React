import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">MyReactApp</Link>
      <div className="navbar-nav">
        <Link className="nav-link" to="/">Login</Link>
        <Link className="nav-link" to="/users">Users</Link>
        <Link className="nav-link" to="/jokes">Jokes</Link>
        <Link className="nav-link" to="/count">Counter</Link>
      </div>
    </nav>
  );
};

export default NavBar;
