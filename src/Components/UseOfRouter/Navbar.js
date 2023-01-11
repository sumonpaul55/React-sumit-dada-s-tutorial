import React from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Servise from './Servise';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to={<Home/>}>Home</Link></li>
                <li><Link to={<About/>}>About</Link></li>
                <li><Link to={<Servise/>}>Service</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;