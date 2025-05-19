import React, { useState } from "react";
import Affichage from "../Affichage/Affichage";
import "./Count.css";

const Count = () => {
  const [count, setCount] = useState(0);

  const Increment = () => setCount(count + 1);
  const Decrement = () => setCount(count - 1);
  const Reset = () => setCount(0);

  return (
    <div className="count-container text-center">
      <h1 className="my-3">🧮 Compteur</h1>
      <div className="mb-3">
        <Affichage fromage={150} />
        <Affichage fromage={count} />
      </div>
      <div className="d-flex justify-content-center gap-3">
        <button className="btn btn-success" onClick={Increment}>
          ➕ Increment
        </button>
        {count > 0 && (
          <button className="btn btn-warning" onClick={Decrement}>
            ➖ Decrement
          </button>
        )}
        <button className="btn btn-danger" onClick={Reset}>
          🔄 Reset
        </button>
      </div>
    </div>
  );
};

export default Count;
