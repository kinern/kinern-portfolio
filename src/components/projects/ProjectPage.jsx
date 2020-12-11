import React from 'react';

const ProjectPage = ({ title, main }) => {
        return(
            <div className="project-page">
                <div className="title">
                    <h1>{title}</h1>
                </div>
                <div className="main">
                    {main}
                </div>
            </div>
        );
}

export default ProjectPage;