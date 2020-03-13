import React, { Component } from 'react';
class ProjectCard extends Component {
    state = {  }
    render() { 
        return (                         
        <div className="card">
            <div className={`card-title ${ this.props.cardColor }`}>
                <h3>{this.props.projectTitle}</h3>
            </div>
            <div className="card-text">
                <h4>{this.props.projectHeadline}</h4>
                {this.props.projectDescription}
            </div>
        </div> 
    );
    }
}
 
export default ProjectCard;