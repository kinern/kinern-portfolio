import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';

import AOS from 'aos';
import 'aos/dist/aos.css';

import {Typography} from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


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
                        <Typography variant="h1" className="text-center name" data-aos="fade-up">NATALIE KINER</Typography>
                        <Typography variant="h4" className="title-software" data-aos="fade-right">SOFTWARE ENGINEER</Typography> 
                        <Typography variant="h1" className="title-and" data-aos="fade-left">&</Typography>
                        <Typography variant="h4" className="title-illustrator" data-aos="fade-right">ILLUSTRATOR</Typography>
                    </div>  
                </Parallax>   
                
                <a href="#about">
                    <div className="welcome-box">
                        <div className='wave-top'></div>
                        <div className="about-link">
                            <Typography variant="h5">WELCOME</Typography>
                            <div className="down-arrows">
                                <ArrowDownwardIcon color="primary" size={1} />
                                <ArrowDownwardIcon color="primary" size={1} />
                                <ArrowDownwardIcon color="primary" size={1} />
                            </div>
                        </div>
                    </div>  
                </a>  
            </div>
        );
    }
}
 
export default Landing;