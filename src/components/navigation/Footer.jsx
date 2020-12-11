import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class Footer extends Component {
    state = {  }
    render() { 
        return (   
            <div>     
                <div className="footer">
                    <div className="right-col">
                        <p>Stock images from <a href="https://www.unsplash.com" >Upsplash</a></p>
                        <p>Portfolio © 2020 Natalie Kiner</p>
                    </div>
                    <div className="left-col">
                        <div className="footer-list">
                            <h5>Site Map</h5>
                            <Link to="/home">Home</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                        <div className="footer-list">
                            <h5>Projects</h5>
                            <Link to="/jtrack">JTrack</Link>
                            <Link to="/portfolio">Portfolio</Link>
                            <Link to="/pspprojects">PSP Pilot</Link>
                            <Link to="/pspprojects">Helpdesk</Link>
                            <Link to="/pspprojects">Bloguru</Link>
                        </div>
                        <div className="footer-list">
                            <h5>Social Media</h5>
                            <a href="https://linkedin.com/in/natalie-kiner" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://github.com/kinern" target="_blank" rel="noopener noreferrer">Github</a>
                            <a href="https://instagram.com/natalie_art7" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href="https://dribbble.com/natalie_kiner" target="_blank" rel="noopener noreferrer">Dribbble</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Footer;