import React from 'react';
import {Parallax} from 'react-scroll-parallax';
import {About} from '../index';

const AboutSmall = () => {
    return(
        <div className="about-small">
            <Parallax>
                <About />
            </Parallax>
        </div>
    );
}

export default AboutSmall;