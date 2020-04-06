import React, { Component } from 'react';

const icons = {
    "Portfolio": <i className="fa fa-briefcase" rel="noopener noreferrer"aria-hidden="true" />,
    "PSP Pilot":  <i className="fa fa-plane" rel="noopener noreferrer"aria-hidden="true" />,
    "Informakers":  <i className="fa fa-paste" rel="noopener noreferrer"aria-hidden="true" />,
    "Bloguru":  <i className="fa fa-users" rel="noopener noreferrer"aria-hidden="true" />,
    "Sakura Rent-A-Car":  <i className="fa fa-car" rel="noopener noreferrer"aria-hidden="true" />,
    "Illustration Gallery": <i className="fa fa-paint-brush" rel="noopener noreferrer"aria-hidden="true" />,
    "Buy Green Signs": <i className="fa fa-map-signs" rel="noopener noreferrer"aria-hidden="true" />,
    "Helpdesk": <i className="fa fa-envelope" rel="noopener noreferrer"aria-hidden="true" />
}; 


class ProjectCard extends Component {
    state = {  }
    render() { 
        return (                         
        <div className={`card ${ this.props.cardColor }`}>
            <div className={`card-title ${ this.props.cardColor }`}>
                <div className='project-type'>
                    <h5>{this.props.projectType}</h5>
                </div>
                <div className='card-icon'>{icons[this.props.projectTitle]}</div>
                <h3>{this.props.projectTitle}</h3>
            </div>
            <div className="card-text">
                <div className="card-text-inner">
                    <h4>{this.props.projectHeadline}</h4>
                    {this.props.projectDescription}
                </div>
            </div>
        </div> 
    );
    }
}
 
export default ProjectCard;