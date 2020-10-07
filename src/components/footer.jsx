import React, { Component } from 'react';
import Icon from '@mdi/react'
import { mdiArrowUpBold } from '@mdi/js';

class Footer extends Component {
    state = {  }
    render() { 
        return (   
            <div>  
                <a href="#top" className="return-top-a">
                    <div className="return-top">
                        <Icon 
                            path={mdiArrowUpBold}
                            size={1.5}
                        />
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