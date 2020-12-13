import React from 'react';

import pilotImg from '../../images/projects/avel-chuklanov-b1qpD3bhPOc-unsplash.jpg';
import helpdeskImg from '../../images/projects/julian-hochgesang-Dkn8-zPIbwo-unsplash.jpg';
import bloguruImg from '../../images/projects/dillon-shook-mY3_bvR74fI-unsplash.jpg';


const PSPProjects = () => {


    const renderBloguru = () => {
        return(
            <React.Fragment>
                <div className="header">
                    <img className="header-img bloguru" src={bloguruImg} alt="Portfolio Header"/>
                </div>
                <h2>Bloguru</h2>
                <hr />
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
                    Bloguru is a product of Pacific Software Publishing Inc.
                </p>
            </React.Fragment>
        );
    };

    const renderHelpdesk = () => {
        return(
            <React.Fragment>
                <div className="header">
                    <img className="header-img helpdesk" src={helpdeskImg} alt="Portfolio Header"/>
                </div>
                <h2>Helpdesk</h2>
                <hr />
                <p>
                    <strong>Helpdesk</strong> is an online email client specifically 
                    catered for support teams in small businesses.
                    This tool connects directly to the client section of PSP Pilot. 
                    Email threads are kept track of and displayed in an organized fashion.
                    New clients can be added on Helpdesk, which then get generated 
                    on PSP Pilot automatically. 
                    <br />
                    <br />
                    Helpdesk is a product of Pacific Software Publishing Inc.
                </p>
            </React.Fragment>
        );
    }

    const renderPilot = () => {
        return(
            <React.Fragment>
                <div className="header">
                    <img className="header-img pilot" src={pilotImg} alt="Portfolio Header"/>
                </div>
                <h2>PSP Pilot</h2>
                <hr />
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
                    PSP Pilot, Feedback, and Help Desk are products of Pacific Software Publishing Inc.
                </p>
            </React.Fragment>
        );
    }

    return(
        <div className="pspprojects project-detailed">
            {renderPilot()}
            {renderHelpdesk()}
            {renderBloguru()}
        </div>
    );
}

export default PSPProjects;