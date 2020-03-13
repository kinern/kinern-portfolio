import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/landing.css';

class Landing extends Component {
    state = {  }
    render() { 
        return (  

        <div className="landing-body">
            <div className="landing-content">
                <div className="circles-background">
                    <h1>Natalie Kiner</h1>
                </div>
                <h4>Software Engineer | Illustrator</h4>
                <div className="nextpage-link">
                    <Link  to="/about">
                        <span>About Me <i className="fa fa-arrow-right"></i></span>
                    </Link>
                </div>
            </div>

        </div> );
    }
}
 
export default Landing;