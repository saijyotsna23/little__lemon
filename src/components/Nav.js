import React from "react";
import { Link } from 'react-router-dom';
import '../Headernav.css';

function Nav(){
    return(
        <nav className="nav-links">
    <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/orderOnline">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
    </ul>
        </nav>
        
    );

}

export default Nav;