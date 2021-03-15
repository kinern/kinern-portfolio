import React, { Component } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';


class FlatContact extends Component {

    componentDidMount(){
        AOS.init({
          duration : 1500
        })
    }
    
    render() { 
        return (  
        <div className="flat-contact fluid-container new-section">
            <div className="container">
            <h3>Send A Message</h3>
            <div>
                <p>
                    If you have inquiries or would like to know more about my work, 
                    feel free to send me a message below! 
                    I can also be contacted through any of my social media profiles. 
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
                            <div className="col-sm-6">
                                <input className="form-control" type="text" name="name" placeholder="Name"/>
                            </div>
                            <div className="col-sm-6">
                                <input className="form-control" type="text" name="_replyto" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-12">
                                <textarea className="form-control" name="message" placeholder="Write your message here!" rows="7"></textarea>
                            </div>
                        </div>
                        <button className="btn btn-primary submit-button" type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div> 
        );
    }
}
 
export default FlatContact;