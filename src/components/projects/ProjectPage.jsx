import React from 'react';

const ProjectPage = ({ title, children }) => {
        return(
            <div className="project-page">
                <div className="title">
                    <h1>{title}</h1>
                </div>
                <div className="main">
                    {children}
                </div>
            </div>
        );
}

export default ProjectPage;