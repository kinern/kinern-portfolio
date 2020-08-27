import React from 'react';

export default () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light" id="navbar">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#top">Natalie Kiner</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav navbar-nav">
                    <li className="nav nav-item">
                        <a className="nav nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav nav-link" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}