import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/UseOfRouter/About";
import Navbar from "./Components/UseOfRouter/Navbar";
import Servise from "./Components/UseOfRouter/Servise";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Servise />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
