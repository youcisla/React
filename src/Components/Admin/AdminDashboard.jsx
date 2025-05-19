import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    email: "",
    prenom: "",
    nom: "",
    username: "",
    password: ""
  });

  const API = "http://localhost:3001/users";

  const fetchUsers = async () => {
    const res = await axios.get(API);
    setUsers(res.data);
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    if (Object.values(newUser).some((val) => val.trim() === "")) {
      alert("Champs obligatoires");
      return;
    }

    const existing = await axios.get(`${API}?email=${newUser.email}`);
    if (existing.data.length > 0) {
      alert("Email déjà utilisé");
      return;
    }

    const userToSend = {
      ...newUser,
      role: "user"
    };

    try {
      await axios.post(API, userToSend);
      fetchUsers();
      setNewUser({
        email: "",
        prenom: "",
        nom: "",
        username: "",
        password: ""
      });
    } catch (error) {
      console.error("Erreur lors de l'ajout d'utilisateur :", error);
    }
  };

  const handleDeleteUser = async (id) => {
    if (!window.confirm("Supprimer cet utilisateur ?")) return;
    try {
      await axios.delete(`${API}/${id}`);
      fetchUsers();
    } catch (err) {
      console.error("Erreur lors de la suppression :", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container py-5">
      <h2 className="mb-4">👑 Tableau de bord Admin</h2>
      <form onSubmit={handleAddUser} className="row g-3">
        {["email", "prenom", "nom", "username", "password"].map((field) => (
          <div className="col-md-4" key={field}>
            <input
              className="form-control"
              placeholder={field}
              value={newUser[field]}
              onChange={(e) =>
                setNewUser({ ...newUser, [field]: e.target.value })
              }
            />
          </div>
        ))}
        <div className="col-md-4">
          <button className="btn btn-success w-100" type="submit">
            Ajouter
          </button>
        </div>
      </form>

      <ul className="list-group mt-4">
        {users.map((u) => (
          <li
            key={u.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {u.prenom} {u.nom} ({u.role})
            <button
              className="btn btn-sm btn-danger"
              onClick={() => handleDeleteUser(u.id)}
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
