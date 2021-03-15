import React from 'react';

class Portfolio extends React.Component {
    render(){
        return(
            <div className="page-container">
                <div className="portfolio project-detailed">
                    <div className="title portfolio">
                        <h1>Portfolio</h1>
                    </div>
                    <div className="content">
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
                        <div className="project-footer">
                            <h3>More info coming soon!</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;