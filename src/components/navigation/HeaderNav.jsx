import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
    return (
        <nav className="top-nav">
            <Link to="/home">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
}