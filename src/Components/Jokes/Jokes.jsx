import axios from "axios";
import React, { useEffect, useState } from "react";
import AffichageJokes from "../AffichageJokes/AffichageJokes";
import "./Jokes.css";

const Jokes = () => {
  const [jokes, setJokes] = useState("");

  const getJokes = async () => {
    try {
      const response = await axios.get("https://api.chucknorris.io/jokes/random");
      setJokes(response.data.value);
    } catch (error) {
      console.error("Erreur lors de la récupération de la blague :", error);
    }
  };

  useEffect(() => {
    getJokes();
  }, []);

  return (
    <div className="jokes-container text-center mt-5">
      <h2>😂 Blague Chuck Norris</h2>
      <button className="btn btn-primary my-3" onClick={getJokes}>
        🔄 Nouvelle blague
      </button>
      {/* Affichage conditionnel */}
      {jokes && <AffichageJokes blague={jokes} />}
    </div>
  );
};

export default Jokes;
