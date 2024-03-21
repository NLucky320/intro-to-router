import React from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <nav>
      
<span>My website</span>
            <NavLink to='/'>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/users">Users</NavLink>
            <NavLink to="/posts">Posts</NavLink>
           
       
        </nav>
    );
};

export default Header;