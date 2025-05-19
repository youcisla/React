import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRole }) => {
  const auth = JSON.parse(localStorage.getItem("auth"));

  if (!auth) return <Navigate to="/" />;

  if (allowedRole && auth.role !== allowedRole) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
