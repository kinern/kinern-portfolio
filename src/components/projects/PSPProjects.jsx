import React from 'react';

import pilotWheel from '../../images/projects/pilotWheel.svg';

const PSPProjects = () => {


    const renderBloguru = () => {
        return(
            <React.Fragment>
                <div className="title bloguru">
                    <h1>Bloguru</h1>
                </div>
                <div className="content">
                        <p><strong>Bloguru</strong> is a long-established bilingual blogging website for 
                        English & Japanese speakers. </p>
                        <br />
                        <br />
                        <h3>My Contiutions To Bloguru</h3>
                        <h4>Video Manager</h4>
                        <p> 
                            One of the highlights of Bloguru is the user video management tool, located within the member interface.
                            For this feature, I designed and implemented a backend system for formatting, storing, and retrieving video data and information. 
                            This was one of the larger projects that I was the main developer for. Along with the main storage system, there was a number of extra parts that went into building this feature. 
                            These include: Automated thumbnail generation for uploaded videos, hotlinking preventon, integration with Twitter and Facebook APIs for blog posting.
                        </p>
                        <h4>Notifications, Emails and Social Media</h4>
                        <p>
                            I maintained and updated automated scripts for emails and notifications for various conditions, such as blog inactivity and the blog daily ranking system.
                            Furthermore, I revamped the API regarding users linking their social media accounts and automatically adding new posts to their user feeds.
                        </p>
                        <h4>Custom Themes</h4>
                        <p>
                            Users of Bloguru have a vast variety of colorful and novel themes to pick from. 
                            There is also the option of building one's own custom theme to create a unique design.
                            One of the projects our team had was to modernize the custom theme generator, including new areas that could be colored, dropdown menus, and new header image placement. 
                            I worked closeley with a front end design and developer to update this tool.
                            My work included handling saved theme data as well as refactoring the theme generator interface functionality.
                        </p>
                        <br />
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
                    </p>
                    <br />
                    <br />


                    <h3>Highlights</h3>
                    <h4>Online Email Client</h4>
                    <p>
                        Helpdesk is an online email client that enhances the user experience for customer support teams. 
                        I was the lead developer in implementing the backend structure and email system.
                    </p>
                    <h4>PSP Pilot Integration</h4>
                    <p>
                        There were several aspects to connecting Helpdesk to PSP Pilot. 
                        These included retieving and automatically adding new client and customer information to PSP Pilot,  
                        displaying message threads on PSP Pilot's client and customer modules, retriving saved user 
                        information for sending reply messages.
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
                    <h3>Customer Relation Management</h3>
                </div>
                <div className="content">
                    <div style={{height: "90vh"}}>
                    <object data={pilotWheel} height="100%"></object>
                    </div>
                    
                        <div>
                        <p>YEAR</p>
                        <h6>2016 - 2019</h6>
                        </div>
                        
                        <div>
                        <p>Deliverables</p>
                        <p>
                            <ul>
                            <li>Backend Development</li>
                            <li>Database Architecture</li>
                            <li>UX Implementation</li>
                            <li>API Development</li>
                            </ul>
                        </p>
                        </div>
                    
                        <p>
                        <strong>PSP Pilot is a collection of tools for small businesses to use within in a centralized location.
                        Instead of switching between different applications for things like scheduling meetings and assigning work to employees, 
                        PSP Pilot makes it easier to complete everyday tasks.</strong></p>

                    <div style={{display:"flex"}}>
                        <h3>Goals</h3>
                        <p>
                        I was a lead developer for the creation and feature development for PSP Pilot.
                        </p>
                    </div>
                    <div>
                        {/* What parts I worked on/happy with */}
                    </div>
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