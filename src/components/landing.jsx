import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/landing.css';

class Landing extends Component {
    state = {  }
    render() { 
        return (  

        <div className="landing-body">
            <video autoPlay muted loop id="myVideo">
                <source src="/videos/jellyfish2.mp4" type="video/mp4" />
            </video>
            <div className="landing-content">
                <div className="circles-background">
                    <div> </div>
                    <h1>Websites That</h1>
                    <h1>Stand Out</h1>
                </div>
                <h4>Software Engineer | Illustrator</h4>
                <Link className="nextpage-link" to="/about"><span>About Me <i className="fa fa-arrow-right"></i></span></Link>
            </div>

        </div> );
    }
}
 
export default Landing;