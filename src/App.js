import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/UseOfRouter/About';
import Home from './Home';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/> 
                <Route path='about' element={<About/>}/> 
            </Routes>
        </BrowserRouter>
    );
};

export default App;