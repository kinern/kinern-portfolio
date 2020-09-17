import React, { Component } from 'react';
class Footer extends Component {
    state = {  }
    render() { 
        return (   
            <div>  
                <a href="#top" className="return-top-a">
                    <div className="return-top">
                        <i className="fa fa-arrow-up"></i>
                    </div>
                </a>      
                <div className="fluid-container footer">
                    <p>Copyright © 2020 Natalie Kiner</p>
                </div>
            </div>
        );
    }
}
 
export default Footer;