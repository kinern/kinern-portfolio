import React, { Component } from 'react';
import Projects from '../../Projects';

class ProjectsPage extends Component {

    render() { 
        return ( 
            <div className="page-container projects-page">
                <div className="projects-top"></div>
                <div className="projects-page-title">
                    <h1>
                        Case Studies
                    </h1>
                </div>
                <Projects/>
                <div className="projects-bottom"></div>
            </div>
        );
    }
}
 
export default ProjectsPage;