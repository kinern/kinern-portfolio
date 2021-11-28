import React from 'react';
import Projects from '../../Projects';
import {Typography} from '@mui/material';


const ProjectsHome = () => {
    return(
        <div className="project-squares-container">
            <div className="case-studies-title">
                <Typography variant="h1">Case Studies</Typography>
            </div>
            <Projects />
            <div className="squares-bottom"></div>
        </div>
    );
};

export default ProjectsHome;