import React, { Component } from 'react';
import Projects from '../../Projects';

import {Typography} from '@mui/material';

class ProjectsPage extends Component {

    render() { 
        return ( 
            <div className="page-container projects-page">
                <div className="projects-top"></div>
                <div className="projects-page-title">
                    <Typography variant="h1">Case Studies</Typography>
                </div>
                <Projects/>
                <div className="projects-bottom"></div>
            </div>
        );
    }
}
 
export default ProjectsPage;