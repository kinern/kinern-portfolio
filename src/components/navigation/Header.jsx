import React from 'react';
import {Link as RouterLink } from 'react-router-dom';
import {AppBar, Toolbar, Link} from '@mui/material';

const Header = () => {
    return (
        <AppBar 
        style={{ background: 'transparent', boxShadow: 'none'}}
        position="absolute"
        className="top-nav">
            <Toolbar variant="dense" className="links">
                <Link component={RouterLink} to="/home">About</Link>
                <Link component={RouterLink} to="/projects">Projects</Link>
                <Link component={RouterLink} to="/contact">Contact</Link>
            </Toolbar>
        </AppBar>
    );
}

export default Header;