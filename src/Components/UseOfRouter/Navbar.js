import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to='/' exact activeStyle={{color: 'blue', fontWeight: 'bold'}}>Home</NavLink></li>
                <li><NavLink to='about' exact activeStyle={{color: 'blue', fontWeight: 'bold'}}>About</NavLink></li>
                <li><NavLink to='service' exact activeStyle={{color: 'blue', fontWeight: 'bold'}}>Service</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;