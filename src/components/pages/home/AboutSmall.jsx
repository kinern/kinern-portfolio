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
                        My name is Natalie. I am a <strong>Full Stack Web Developer</strong> living in the Pacific Northwest.
                        I have built a variety of web applications, ranging from creating reliable websites 
                        for clients to integrating tools such as online vector graphic editors 
                        and mail services to existing webpages. 
                        In my spare time I have built mobile applications and games. 
                        I am always eager to work with the latest technologies.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutSmall;