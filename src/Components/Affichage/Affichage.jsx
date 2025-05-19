import React from "react";
import "./Affichage.css";

const Affichage = ({ fromage }) => {
  return (
    <div className="affichage-container">
      <p>Bienvenu sur le composant d'affichage</p>
      <p>{fromage}</p>
    </div>
  );
};

export default Affichage;
