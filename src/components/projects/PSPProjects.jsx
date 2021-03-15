import React from 'react';

const PSPProjects = () => {


    const renderBloguru = () => {
        return(
            <React.Fragment>
                <div className="title bloguru">
                    <h1>Bloguru</h1>
                </div>
                <div className="content">
                    <p>
                        <strong>Bloguru</strong> is a long-established bilingual blogging website for 
                        English & Japanese speakers.
                        <br />
                        <br />
                        <strong>Back-End Development</strong>
                        <ul>
                            <li>Video Upload And Management</li>
                            <li>Custom Themes 2.0</li>
                        </ul>
                        <strong>Additional Features</strong>
                        <ul>
                            <li>Blog Post Aggregator</li>
                            <li>Email Notifications</li>
                            <li>Generating Posts Via Email</li>
                            <li>Sharing On Social Media</li>
                        </ul>
                        <br />
                    </p>
                    <div className="project-footer">
                        <h4> Helpdesk is a product of Pacific Software Publishing Inc. </h4>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    const renderHelpdesk = () => {
        return(
            <React.Fragment>
                <div className="title helpdesk">
                    <h1>Helpdesk</h1>
                </div>
                <div className="content">
                    <p>
                        <strong>Helpdesk</strong> is an online email client specifically 
                        catered for support teams in small businesses.
                        This tool connects directly to the client section of PSP Pilot. 
                        Email threads are kept track of and displayed in an organized fashion.
                        New clients can be added on Helpdesk, which then get generated 
                        on PSP Pilot automatically. 
                        <br />
                        <br />
                    </p>
                    <div className="project-footer">
                        <h4> Helpdesk is a product of Pacific Software Publishing Inc. </h4>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    const renderPilot = () => {
        return(
            <React.Fragment>
                <div className="title psp-pilot">
                    <h1>PSP Pilot</h1>
                </div>
                <div className="content">
                    <p>
                        <strong>PSP Pilot</strong> is a CRM tool for small businesses.
                        Employee, client and project tracking are all combined within the application.
                        I was a lead developer in the creation of PSP Pilot, 
                        and had an essential role in the back-end development of the product.
                        <br />
                        <br />
                        Additional services for PSP Pilot include Feedback and Help Desk.
                        <br />
                        <br />
                        <strong>Feedback</strong> is a survey generating tool that connects to the client section of PSP Pilot.
                        As a team member for Feedback, my role included updating the survey 
                        retrieval and display system, improving overall performance.
                        <br />
                        <br />
                        <strong>Help Desk</strong> is an online email tool that allows support teams to 
                        quickly handle requests and record email threads into PSP Pilot.
                        I played a major role in the creation and development for this project. 
                        More information can be found in the next project section.
                        <br />
                        <br />
                    </p>
                    <div className="project-footer">
                        <h4> PSP Pilot is a product of Pacific Software Publishing Inc. </h4>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    return(
        <div className="page-container">
            <div className="pspprojects project-detailed">
                {renderPilot()}
                {renderHelpdesk()}
                {renderBloguru()}
            </div>
        </div>
    );
}

export default PSPProjects;