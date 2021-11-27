import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';

import AOS from 'aos';
import 'aos/dist/aos.css';

//import { mdiArrowDown } from '@mdi/js';
//import Icon from '@mdi/react';


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
                        <h1 className="text-center name" data-aos="fade-up">NATALIE KINER</h1>
                        <h4 className="title-software" data-aos="fade-right">SOFTWARE ENGINEER</h4> 
                        <h1 className="title-and" data-aos="fade-left">&</h1>
                        <h4 className="title-illustrator" data-aos="fade-right">ILLUSTRATOR</h4>
                    </div>  
                </Parallax>   
                
                <div className="welcome-box">
                <div className='wave-top'></div>
                    <div className="about-link">
                        <a href="#about">
                            <h5>WELCOME</h5>
                            {/*
                                <div className="down-arrows">
                                    <Icon path={mdiArrowDown} size={1}/>
                                    <Icon path={mdiArrowDown} size={1}/>
                                    <Icon path={mdiArrowDown} size={1}/>
                                </div>
                            */}
                        </a>
                    </div>
                </div>    
            </div>
        );
    }
}
 
export default Landing;