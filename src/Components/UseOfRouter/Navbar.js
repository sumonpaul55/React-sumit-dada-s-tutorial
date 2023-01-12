import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    let activeStyle ={
        color: 'yellow',
        fontWeight: 'bold',
        textDecoration: 'underline',
    }
    return (
        <nav>
            <ul>
                <li><NavLink to='/' style={({isActive})=> isActive? activeStyle : undefined} >Home</NavLink></li>
                <li><NavLink to='about' style={({isActive})=> isActive? activeStyle : undefined} >About</NavLink></li>
                <li><NavLink to='service' style={({isActive})=> isActive? activeStyle : undefined} >Service</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;