import React, { Component } from 'react';
import Badges from '../Badges';

import AOS from 'aos';
import 'aos/dist/aos.css';


class About extends Component {
    state = {  }

    componentDidMount(){
        AOS.init({
          duration : 1500
        })
    }

    render() { 
        return (  
        <div className="fluid-container about" id="about">
            <div className="container" data-aos='fade-left'>
                <div className="row">
                    <div className="col-sm about-title">
                        <h2>About Me</h2>
                    </div>
                    <div className="col-lg">
                        <hr />
                        <div>
                            Hello! my name is Natalie. I am a Software Engineer living in the PNW.
                            Programming is something I have enjoyed doing for many years.
                            Recently I have been working as a Full Stack Web Developer.
                            I like collaborating with others on large software projects, but I also 
                            delve into solo projects from time to time.
                        </div>
                        <br />
                        <div>
                            My other creating outlet in my artwork, which I have been producing since I was a kid. 
                            I am accustomed to colored pencil and lineart, 
                            but I have also recently picked up watercolors painting.
                            You can see a glimpse of my artwork on my Instragram profile.
                            I enjoy drawing wildlife and natural landscapes.
                        </div>
                        <br />
                        <div>
                            Something people may not know about is my interest in Japanese 
                            language and culture. After I graduated university, I was an 
                            assistant language teacher for two years Southern Japan. 
                            I have fond memories of giving students English lessons and 
                            being a part of the community. 
                            I started learning Japanese in high school and hope to pass the 
                            N2 Japanese Language Proficiency Test (JLPT) at the end of 2021.
                        </div>
                    </div>
                </div>
            </div> 
            {/*
            <div className="about-technology" data-aos='fade-right'>
                    <div className="about-title">
                        <h2>Web Development</h2>
                    </div>
                    <h5 className="text-center">
                        Technologies That I Work With
                    </h5>
                    <Badges />
                </div>
            */}
        </div>
        );
    }
}
 
export default About;