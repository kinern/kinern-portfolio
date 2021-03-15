import React from 'react';
import {Link} from 'react-router-dom';

const HeaderNav = ({styleClass}) => {
    return (
        <nav className={`top-nav ${styleClass}`}>
            <Link to="/home">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
}

export default HeaderNav;