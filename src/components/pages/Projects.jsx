import React, { Component } from 'react';
import ProjectCard from '../ProjectCard';
import projectData from '../../projectData';


const cards = projectData.map(project=>{
    return <ProjectCard project={project} />
});

class Projects extends Component {

    render() { 
        return ( 
        <div className="fluid-container projects">
            <div className="projects-title" id="projects">
                    <h1>Recent Projects</h1>
            </div>
            <div className="container">
                <div className="container">
                    {cards}
                </div>
            </div>
        </div> 
        );
    }
}
 
export default Projects;