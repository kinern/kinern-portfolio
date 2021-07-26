import React from 'react';
import {Parallax} from 'react-scroll-parallax';

import portraitImage from '../../../images/portfolio-portrait.svg';

const AboutSmall = () => {
    return(
        <div className="about-small" id="about">
            <Parallax>
            <div className="inner">
                <div className="left-col">
                    <h1>Hello!</h1>
                    <div className="portrait-container">
                        <object data={portraitImage} height="100%"></object>
                    </div>
                </div>
                <div className="right-col">
                    <p>
                        Hi! My name is Natalie Kiner and I am a Web Developer located in the Pacific Northwest. 
                        I have worked on a number of web apps, including the blogging hub Bloguru and the CRM suite PSP Pilot. 
                        <br />
                        <br />
                        In addition, I like learning about the latest technologies and have a number of personal projects. Lately I have been updating JTrack, a fitness tracking mobile app.
                        <br />
                        <br />
                        Outside of the tech world, I am passionate about art. I mainly create lineart or watercolor illustrations, but have some experience with digital work. Aside from the above self-portrait, you can see more of my artwork on <a href="https://instagram.com/natalie_art7">Instagram</a>.
                    </p>
                </div>
            </div>
            </Parallax>
        </div>
    );
}

export default AboutSmall;