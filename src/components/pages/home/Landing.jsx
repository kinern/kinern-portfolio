import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';

import AOS from 'aos';
import 'aos/dist/aos.css';


class Landing extends Component {
    constructor(props){
        super(props);
        this.timerId = 1;
        this.offset = 0;
    }

    componentDidMount(){
        AOS.init({
          duration : 1500
        });
    }

    render() { 
        return (  
            <div className="fluid-container landing" id="top">
                <Parallax y={[-50, 50]}>
                    <div className="container">
                        <h1 className="text-center" id="title-name" data-aos='fade-up'>Natalie Kiner</h1>
                        <h4 className="text-center" id="title-profession" data-aos='fade-up'>Software Engineer & Illustrator</h4>
                    </div>  
                </Parallax>          
            </div>
        );
    }
}
 
export default Landing;