import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ nom: "", prenom: "" });
  const [editUser, setEditUser] = useState(null);

  const API_URL = "http://localhost:3001/users";

  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, newUser);
      alert("Utilisateur ajouté !");
      setUsers([...users, newUser]);
      setNewUser({ nom: "", prenom: "" });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Supprimer cet utilisateur ?")) return;
    try {
      await axios.delete(`${API_URL}/${id}`);
      setUsers(users.filter((u) => u.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const startEdit = (user) => setEditUser(user);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_URL}/${editUser.id}`, editUser);
      setUsers(users.map((u) => (u.id === editUser.id ? editUser : u)));
      setEditUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="users-page">
      <h2>👤 Gestion des utilisateurs</h2>

      <form onSubmit={addUser} className="mb-4 row g-2">
        <div className="col-md-4">
          <input
            type="text"
            placeholder="Nom"
            className="form-control"
            value={newUser.nom}
            onChange={(e) => setNewUser({ ...newUser, nom: e.target.value })}
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            placeholder="Prénom"
            className="form-control"
            value={newUser.prenom}
            onChange={(e) => setNewUser({ ...newUser, prenom: e.target.value })}
          />
        </div>
        <div className="col-md-4">
          <button type="submit" className="btn btn-success w-100">
            Ajouter
          </button>
        </div>
      </form>

      {editUser && (
        <form onSubmit={updateUser} className="mb-4 row g-2">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              value={editUser.nom}
              onChange={(e) => setEditUser({ ...editUser, nom: e.target.value })}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              value={editUser.prenom}
              onChange={(e) => setEditUser({ ...editUser, prenom: e.target.value })}
            />
          </div>
          <div className="col-md-4">
            <button type="submit" className="btn btn-primary w-100">
              Modifier
            </button>
          </div>
        </form>
      )}

      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
            {user.nom} {user.prenom}
            <div>
              <button className="btn btn-sm btn-warning me-2" onClick={() => startEdit(user)}>✏️</button>
              <button className="btn btn-sm btn-danger" onClick={() => deleteUser(user.id)}>🗑️</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
