import React from 'react';

import portfolioImg from '../../images/projects/magdalena-smolnicka-Y-G8GwcyOss-unsplash.jpg';


class Portfolio extends React.Component {
    render(){
        return(
            <div className="portfolio project-detailed">
                <div className="header">
                    <img className="header-img" src={portfolioImg} alt="Portfolio Header"/>
                </div>
                <p>
                    This is my portfolio website, created primarily with ReactJS and hosted using GitPages.
                    The homepage features an overview of myself, my projects, and a contact form.
                    There are also separate pages that go into detail of each piece of my work.
                    <br />
                    <br />
                    <strong>Created With</strong>
                    <ul>
                        <li>React Routing</li>
                        <li>Material Community/Font Awesome Icons</li>
                        <li>Splide</li>
                        <li>Formspree</li> 
                    </ul>
                </p>
                <p>
                    <strong>More info coming soon!</strong>
                </p>
            </div>
        );
    }
}

export default Portfolio;