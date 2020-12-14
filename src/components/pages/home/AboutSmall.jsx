import React from 'react';

import portraitImage from '../../../images/portfolio-portrait.png';

const AboutSmall = () => {
    return(
        <div className="about-small">
            <div className="inner">
                <div className="left-col">
                    <h1>Hello!</h1>
                    <img src={portraitImage} height="300" alt="a" />
                </div>
                <div className="right-col">
                    <p>
                        My name is Natalie Kiner. I am a <strong>Full Stack Web Developer</strong> living in the Pacific Northwest. I have worked on a number of web applications, including the multilingual blogging website Bloguru and CRM suite PSP Pilot. Along with my professional work, I enjoy learning about the latest technologies and building personal apps. My latest project is JTrack, a fitness tracking mobile application.
                        <br />
                        <br />
                        I am also passionate about creating art. My main mediums are pens and watercolor paints. You can see a glimpse of artwork on my Instagram page.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutSmall;