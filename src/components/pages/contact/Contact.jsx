import React, { Component } from 'react';
import FlatContact from '../home/FlatContact';


class Contact extends Component {
    render() { 
        return (  
                <div className="fluid-container contact">
                    <div style={{width: "100%"}}>
                        <FlatContact />
                    </div>
                </div>
        );
    }
}
 
export default Contact;