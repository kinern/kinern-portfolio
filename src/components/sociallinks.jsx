import React, { Component } from 'react';

class SocialLinks  extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="social-links">
            <a href="https://www.linkedin.com/in/natalie-kiner/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin-square" rel="noopener noreferrer"aria-hidden="true" />
            </a>
            <a href="https://github.com/kinern" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github-square" rel="noopener noreferrer"aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com/natalie_art7/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram" rel="noopener noreferrer"aria-hidden="true" />
            </a>
        </div>
        );
    }
}
 
export default SocialLinks;