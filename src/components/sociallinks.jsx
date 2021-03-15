import React from 'react';

const SocialLinks = () => {
    return ( 
        <div className="social-links">
            <div className="inner">
                <a className="btn" href="https://www.linkedin.com/in/natalie-kiner/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin-square fa-3x" rel="noopener noreferrer"aria-hidden="true" />
                </a>
                <a className="btn" href="https://github.com/kinern" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github-square fa-3x" rel="noopener noreferrer"aria-hidden="true" />
                </a>
                <a className="btn" href="https://www.instagram.com/natalie_art7/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-instagram fa-3x" rel="noopener noreferrer"aria-hidden="true" />
                </a>
                <a className="btn" href="https://dribbble.com/natalie_kiner" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-dribbble fa-3x" rel="noopener noreferrer"aria-hidden="true" />
                </a>
            </div>
        </div>
    );
};

export default SocialLinks;