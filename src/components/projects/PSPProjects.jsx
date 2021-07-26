import React from 'react';

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