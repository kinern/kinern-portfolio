import React from 'react';
import Projects from '../../Projects';


const ProjectsHome = () => {
    return(
        <div className="project-squares-container">
            <div className="case-studies-title">
            <h1>Case Studies</h1>
            </div>
            <Projects />
            <div className="squares-bottom"></div>
        </div>
    );
};

export default ProjectsHome;