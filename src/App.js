import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./Components/UseOfRouter/About";
import Dashboard from "./Components/UseOfRouter/Dashboard";
import Navbar from "./Components/UseOfRouter/Navbar";
import PageNotFound from "./Components/UseOfRouter/PageNotFound";
import Post from "./Components/UseOfRouter/Post";
import Servise from "./Components/UseOfRouter/Servise";
import Home from "./Home";

const App = () => {
  const loggedIn = false;
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Servise />  }/>
        <Route path="/post/:category" element={<Post/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/login" element={(loggedIn) ? <Navigate to="/dashboard"/> : <Home/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
        
      </BrowserRouter>
  );
};

export default App;
