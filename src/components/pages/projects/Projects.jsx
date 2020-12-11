import React, { Component } from 'react';

import ProjectCarousel from '../projects/ProjectsCarousel';

class Projects extends Component {

    render() { 
        return ( 
            <div className="page-container">
                <div className="project-carousel">
                    <ProjectCarousel />
                </div> 
            </div>
        );
    }
}
 
export default Projects;