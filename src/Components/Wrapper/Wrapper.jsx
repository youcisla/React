import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./Wrapper.css";

const Wrapper = ({ children }) => {
  return (
    <div className="app-wrapper">
      <NavBar />
      <main className="container py-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Wrapper;
