import React, { Component } from 'react';
import SocialLinks from './sociallinks';
import '../css/contact.css';
import Footer from './footer';

class Contact extends Component {
    state = {  }
    render() { 
        return (  
        <div className="contact-body">
            <div className="contact-container">
            <div class="contact-table">
                <div className="contact-text">
                <h1>Contact Me</h1>
                    <hr />
                    <SocialLinks />
                    <p>
                        <ul >
                            <li>Do you have questions?</li>
                            <li>Want me on your project?</li>
                            <li>Have you spotted a bug on this site?</li> 
                        </ul>
                        Contact me by any of the social media links above!
                        I look forward to hearing from you.
                    </p>
                </div>
                <div ><img src={require('../images/butterfly.jpg')} alt="Butterfly"/></div>
            </div>
            </div>
            <Footer />
        </div> 
        );
    }
}
 
export default Contact;