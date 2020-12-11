import React, { Component } from 'react';

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
            <div className="container main">
                    <div>
                        <p>
                           If you have inquiries or would like to know more about a project, 
                           feel free to send me a message below! 
                        </p>
                    </div>
                    <div className="contact-form">
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