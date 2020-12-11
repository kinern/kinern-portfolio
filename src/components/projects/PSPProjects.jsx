import React from 'react';

import pilotImg from '../../images/projects/ryan-de-hamer-pCT8ag1o3nU-unsplash.jpg';
import helpdeskImg from '../../images/projects/ryan-de-hamer-pCT8ag1o3nU-unsplash.jpg';
import bloguruImg from '../../images/projects/ryan-de-hamer-pCT8ag1o3nU-unsplash.jpg';


const PSPProjects = () => {


    const renderBloguru = () => {
        return(
            <div>
            <p>
                <strong>Bloguru</strong> is a long-established bilingual blogging website for 
                English & Japanese speakers.
            </p>
            <p>
                I was the go-to back end developer for:
                <ul>
                    <li>Video Upload And Management</li>
                    <li>Custom Themes 2.0</li>
                </ul>
                As well as updating a multitude of features:
                <ul>
                    <li>Blog Post Aggregator</li>
                    <li>Email Notifications</li>
                    <li>Generating Posts Via Email</li>
                    <li>Sharing On Social Media</li>
                </ul>
            </p>

            <p>
                Bloguru is a product of Pacific Software Publishing Inc.
            </p>
        </div>
        );
    };

    const renderHelpdesk = () => {
        return(
            <div>
                <p>
                <strong>Helpdesk</strong> is an online email client specifically 
                    catered for support teams in small businesses.
                    This tool connects directly to the client section of PSP Pilot. 
                    Email threads are kept track of and displayed in an organized fashion.
                    New clients can be added on Helpdesk, which then get generated 
                    on PSP Pilot automatically. 
                </p>
                <p>
                    Helpdesk is a product of Pacific Software Publishing Inc.
                </p>
            </div>
        );
    }

    const renderPilot = () => {
        return(
            <div>
                <p>
                    <strong>PSP Pilot</strong> is a CRM tool for small businesses.
                    Employee, client and project tracking are all combined within the application.
                    I was a lead developer in the creation of PSP Pilot, 
                    and had an essential role in the back-end development of the product.
                </p>
                <p> 
                    Additional services for PSP Pilot include Feedback and Help Desk.
                </p>
                <p>
                    <strong>Feedback</strong> is a survey generating tool that connects to the client section of PSP Pilot.
                    As a team member for Feedback, my role included updating the survey 
                    retrieval and display system, improving overall performance.
                <p>
                </p>
                    <strong>Help Desk</strong> is an online email tool that allows support teams to 
                    quickly handle requests and record email threads into PSP Pilot.
                    I played a major role in the creation and development for this project. 
                    More information can be found in the next project section.
                </p>
                <p>
                    PSP Pilot, Feedback, and Help Desk are products of Pacific Software Publishing Inc.
                </p>
            </div>
        );
    }

    return(
        <div>
            <h2>PSP Pilot</h2>
            <hr />
            {renderPilot()}
            <h2>Helpdesk</h2>
            <hr />
            {renderHelpdesk()}
            <h2>Bloguru</h2>
            <hr />
            {renderBloguru()}
        </div>
    );
}

export default PSPProjects;