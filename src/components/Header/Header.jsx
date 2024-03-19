import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav>
            <h1>Navbar</h1> 

            <Link to='/'>Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
           
       
        </nav>
    );
};

export default Header;