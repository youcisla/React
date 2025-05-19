import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Wrapper = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <main className="flex-fill container py-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Wrapper;
