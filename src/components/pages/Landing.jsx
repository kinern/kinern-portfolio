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

    render() { 
        return (  
            <div className="fluid-container landing" id="top">
                <div className="container">
                    <h1 className="text-center" data-aos='fade-up'>Natalie Kiner</h1>
                    <h4 className="text-center" data-aos='fade-up'>Software Engineer & Illustrator</h4>
                    <a href="#about" data-aos='fade-up'>
                        <span data-aos='fade-up' className="down-arrow"><i className="fas fa-chevron-down"></i></span>
                    </a>
                </div>
                
            </div>
        );
    }
}
 
export default Landing;