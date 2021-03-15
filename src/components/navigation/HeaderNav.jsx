import React from 'react';
import {Link} from 'react-router-dom';

const HeaderNav = ({styleClass}) => {
    return (
        <nav className="top-nav">
            <div className="link"><Link to="/home">About</Link></div>
            <div className="link"><Link to="/projects">Projects</Link></div>
            <div className="link"><Link to="/contact">Contact</Link></div>
        </nav>
    );
}

export default HeaderNav;