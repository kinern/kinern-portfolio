import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/about.css';
import Footer from './footer';

class About extends Component {
    state = {  }
    render() { 
        return (  
        <div className="about-body">
            <table className="about-table">
                <tbody>
                <tr className="about-row">
                    <td col={6} className="aboutme-img"><img src ={require('../images/lion-dog-statue.jpg')} alt="Statue" /></td>
                    <td col={6} className="aboutme-cell">
                        <h4>About Me</h4>
                        <hr />
                        <p>
                            I am a Full Stack Web Developer in the Seattle area.
                            Previously I worked as an Assistant Language Teacher in southern Japan 
                            and aided computer labs while studying at university.
                            I have a bachelors in Computer Science with a Japanese minor. 
                            My interests include programming, art, reading, and learning different languages.
                        </p>
                        <div className="color-block-right" />
                    </td>
                </tr>
                <tr className="about-row">
                    <td col={6} className="myworks-cell">
                        <h4>My Works</h4>
                        <hr />
                        <p>
                            I enjoy learning about new technologies and creating smaller software applications.
                            I have led and contributed to several larger projects while at PSP Inc.
                            Drawing is my other creative outlet, including watercolors, ink and colored pencil works.
                        </p>
                        <div className="color-block-left" />
                        </td>
                    <td col={6} className="myworks-img"><img src={require('../images/frog.jpg')} alt="Frog"/></td>
                </tr>
                </tbody>
            </table> 
            <div className="nextpage-container">
                <Link className="nextpage-link" to="/projects">See My Projects <span><i className="fa fa-arrow-right"></i></span></Link>
            </div>
            <Footer />
        </div>
        );
    }
}
 
export default About;