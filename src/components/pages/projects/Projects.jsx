import React, { Component } from 'react';
import ProjectsHome from '../home/ProjectsHome';

class Projects extends Component {

    render() { 
        return ( 
            <div className="page-container projects-page">
                <ProjectsHome/>
            </div>
        );
    }
}
 
export default Projects;