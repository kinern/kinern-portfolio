import React, { Component } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import portraitImage from '../../../images/portfolio-portrait.png';

class About extends Component {
    state = { }

    componentDidMount(){
        AOS.init({
          duration : 1500
        });
    }

    render() { 
        return (  
        <div className="fluid-container about" id="about">
            <div className="container">
                <div className="row" data-aos='fade-left'>
                    <div className="col-sm about-title">
                        <h2>Hello!</h2>
                        <img className="profile-img" alt="Profile"src={portraitImage} />
                    </div>
                    <div className="col-lg">
                        <hr />
                        <div>
                            My name is Natalie. I am a Full Stack Web Developer living in the Pacific Northwest.
                            I have built a variety of web applications, ranging from creating reliable websites 
                            for clients to integrating tools such as online vector graphic editors 
                            and mail services to existing webpages. 
                            In my spare time I have built mobile applications and games. 
                            I am always eager to work with the latest technologies.
                        </div>
                        <br />
                        <div>
                            I am an illustrator as well, and enjoy drawing with traditional mediums.
                            You can view my watercolor artwork on my Instagram page.
                        </div>
                        <br />
                        <div>
                            Previously, I worked as an assistant language teacher for a small town in Southern Japan.
                            Being part of the community and helping students learn English has had a large impact on my life.
                            I always find the time to practice Japanese, and I plan on taking the JLPT exam next year.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
 
export default About;