import React, { Component } from 'react';
import ProjectData from './projectdata';

class ProjectCard extends Component {
    constructor(props) {
        super(props);
    }

    Link() {
        let title = this.props.projectTitle;
        let hasLink = (ProjectData[title].link); 
        if (hasLink){
            return (
            <div className="url-button">
                <a href={ProjectData[title].link}>URL</a>
            </div>);
        } 
    }

    render() { 
        let title = this.props.projectTitle;
        let filters = ProjectData[title].filters.join(' ');
        return (                         
        <div className={`card ${ filters }`}>

            <div className={`card-title ${ ProjectData[title].color }-card`}>
                <div className='project-type'>
                    <h5>{ProjectData[title].type}</h5>
                </div>
                <h3>{title}</h3>
            </div>

            <div className="card-text">
                <div className='card-icon'>{ProjectData[title].icon}</div>
                <div className="card-text-inner">
                    <h4>{ProjectData[title].headline}</h4>
                    {ProjectData[title].description}
                </div>
                <div className="links">
                {this.Link()}
                </div>
            </div>

        </div> 
    );
    }
}
 
export default ProjectCard;