import React, { Component } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';


class ProjectCard extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount(){
        AOS.init({
          duration : 1500
        })
    }


    renderLinks = () => {
        const {url, repo} = this.props.project;
        const buttons = 
            <div class="card-buttons">
                {(url)? <a className="project-btn btn btn-primary" target="_blank" href={url}>View Site</a>: ''}
                {(repo)? <a className="project-btn btn btn-primary" target="_blank" href={repo}>View Repo</a>: ''}
            </div>
        return buttons;
    }

    renderHeaderImage(){
        const {title, headerImage} = this.props.project;
        if (headerImage){
            return (
                <React.Fragment>
                    <img className="card-img-top" src={headerImage} alt={title} />
                    <div class="card-img-overlay"><h1 className="card-title">{title}</h1></div>
                </React.Fragment>
            )        
        } else {
            return <h1 className="card-title">{title}</h1>;
        } 
    }


    render() { 
        const {title, headline, description, headerImage } = this.props.project;
        return(
        <div className="card" data-aos='fade-up'>
            <div className="card-header">
                {this.renderHeaderImage()}
            </div>
            <div className="card-body">
                <div className="card-text">
                    <h4 className="text-center">{headline}</h4>
                    <hr />
                    <p>{description}</p>
                </div>
                {this.renderLinks()}
            </div>
        </div>
        );
    }
}
 
export default ProjectCard;