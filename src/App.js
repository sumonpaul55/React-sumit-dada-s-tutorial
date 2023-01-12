import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/UseOfRouter/About";
import Navbar from "./Components/UseOfRouter/Navbar";
import PageNotFound from "./Components/UseOfRouter/PageNotFound";
import Post from "./Components/UseOfRouter/Post";
import Servise from "./Components/UseOfRouter/Servise";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="home" element={<Home />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="service" element={<Servise />} />
        <Route exact path="post/:category/:topic" element={<Post />} />
        <Route exact path="*" element={<PageNotFound/>}/>
      </Routes>
        
      </BrowserRouter>
  );
};

export default App;
