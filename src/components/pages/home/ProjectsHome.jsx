import React from 'react';
import ProjectCarousel from '../projects/ProjectsCarousel';

const ProjectsHome = () => {
    return(
        <div className="project-carousel new-section">
        <div className="intro">
            <h1>Case Studies</h1>
        </div>
            <ProjectCarousel />
        </div>
    );
};

export default ProjectsHome;