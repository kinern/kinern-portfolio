import React from 'react';

import portfolioImg from '../../images/projects/ryan-de-hamer-pCT8ag1o3nU-unsplash.jpg';
import screenshots from '../../images/projects/ryan-de-hamer-pCT8ag1o3nU-unsplash.jpg';


class Portfolio extends React.Component {
    render(){
        return(
            <div>
                <h2>Portfolio</h2>
                <hr />
                <div>
                    <p>
                        <strong>This website</strong> is a simple single-scrolling 
                        portfolio to show who I am and what I do. It contains an 
                        overview about myself and my projects, along with a section 
                        to contact me by.
                    </p>
                </div>
            </div>
        );
    }
}

export default Portfolio;