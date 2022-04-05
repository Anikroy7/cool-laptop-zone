import React from 'react';
import { NavLink } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className='navbar'>
            <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to={'/'}>Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to={'/reviews'} >Reviews</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to={'/dashboard'} >Dashboard</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to={'/blogs'}>Blogs</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to={'/about'}>About</NavLink>
        </nav>
    );
};

export default Navbar;