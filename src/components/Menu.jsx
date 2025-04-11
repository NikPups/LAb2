import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Menu() {
    return (
        <nav className="menu">
            <ul>
                <li><Link to="/lab1">Lab1</Link></li>
                <li><Link to="/lab2">Lab2</Link></li> 
            </ul>
        </nav>
    );
}

export default Menu;