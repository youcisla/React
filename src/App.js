import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import UserDashboard from "./Components/User/UserDashboard";
import Count from "./Components/Count/Count";
import Jokes from "./Components/Jokes/Jokes";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Wrapper from "./Components/Wrapper/Wrapper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Wrapper><Login /></Wrapper>} />
        <Route path="/register" element={<Wrapper><Register /></Wrapper>} />

        {/* Admin */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRole="admin">
              <Wrapper><AdminDashboard /></Wrapper>
            </ProtectedRoute>
          }
        />

        {/* Utilisateur */}
        <Route
          path="/user"
          element={
            <ProtectedRoute allowedRole="user">
              <Wrapper><UserDashboard /></Wrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/count"
          element={
            <ProtectedRoute allowedRole="user">
              <Wrapper><Count /></Wrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/jokes"
          element={
            <ProtectedRoute allowedRole="user">
              <Wrapper><Jokes /></Wrapper>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
