import React, { Component } from 'react';
import SocialLinks from '../SocialLinks';

import AOS from 'aos';
import 'aos/dist/aos.css';


class Contact extends Component {

    componentDidMount(){
        AOS.init({
          duration : 1500
        })
    }
    
    render() { 
        return (  
        <div className="fluid-container contact">
            <div className="fixed-bg fluid-container" id="contact">
                <h1 className="contact-title">Contact</h1>
            </div>
            <div className="container contact-main" data-aos='fade-up'>
                    <div>
                        <p>
                           If you have inquiries or would like to know more about a project, 
                           feel free to send me a message below! 
                           I can also be contacted through any of my social media profiles. 
                        </p>
                    </div>
                    <h3 className="text-center">Social Media</h3>
                    <SocialLinks />
                    <div className="contact-form">
                        <h2 className="text-center">Get In Touch</h2>
                        <hr />
                        <form
                        action="https://formspree.io/mqkyjqwn"
                        method="POST"
                        className="form"
                        >
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input className="form-control" type="text" name="name" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">E-mail</label>
                                <div className="col-sm-10">
                                    <input className="form-control" type="text" name="_replyto" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Message</label>
                                <div className="col-sm-10">
                                    <textarea className="form-control" name="message"></textarea>
                                </div>
                            </div>
                            <button className="btn btn-primary" type="submit">Send</button>
                        </form>
                    </div>
            </div> 
        </div>
        );
    }
}
 
export default Contact;