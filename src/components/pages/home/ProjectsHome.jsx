import React from 'react';
import ProjectCarousel from '../projects/ProjectsCarousel';

const ProjectsHome = () => {
    return(
        <div className="project-carousel new-section">
        <div className="intro">
            <h2>An Overview Of My Recent Projects</h2>
            <h3>Flip through the slides below to learn more about my work</h3>
        </div>
            <ProjectCarousel />
        </div>
    );
};

export default ProjectsHome;