import React, { Component } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';


class Landing extends Component {
    state = {  }

    componentDidMount(){
        AOS.init({
          duration : 1500
        })
    }

    /*
    //Hexigon background
    renderBackground () {
        return (
            <svg className="landing-background" width="90vw" height="120vh" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">
                <image href={require('../../images/sunflower-background.jpg')} x="0" width="150" height="100" />
                </pattern>
            </defs>
            <polygon points="55 1, 105 30, 105 70, 55 99, 10 75, 10 25" fill="url(#img)"/>
            </svg>
        );
    }
    */

    render() { 
        return (  
            <div className="fluid-container landing">
                <div className="container">
                    <h1 className="text-center" data-aos='fade-up'>Natalie Kiner</h1>
                    <h4 className="text-center" data-aos='fade-up'>Software Engineer & Illustrator</h4>
                    <span data-aos='fade-up' className="down-arrow"><i class="fas fa-chevron-down"></i></span>
                </div>
                
            </div>
        );
    }
}
 
export default Landing;