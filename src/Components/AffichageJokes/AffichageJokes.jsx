import React from "react";
import "./AffichageJokes.css";

const AffichageJokes = ({ blague }) => {
  return (
    <div className="joke-box p-3 mx-auto">
      <p>{blague}</p>
    </div>
  );
};

export default AffichageJokes;
