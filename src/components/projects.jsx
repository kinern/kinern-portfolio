import React, { Component } from 'react';
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs';
import { Link } from 'react-router-dom';
import '../css/projects.css';
import Footer from './footer';
import ProjectCard from './projectcard';


class Projects extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="projects-body">
            <Tabs className="projects-tabs" selectedTabClassName="selected-tab" selectedTabPanelClassName="selected-panel">
                <TabList className="projects-tablist">
                    <Tab className="tab-button">Professional Works</Tab>
                    <Tab className="tab-button">Personal Projects</Tab>
                </TabList>
                <TabPanel className="tab-panel">
                    <div className="card-intro"><h5>The following are websites that I have led or made significant contibutions to as a Full Stack Web Developer.</h5></div>
                    <div className="cards">
                        <ProjectCard 
                        projectTitle={'PSP Pilot'}
                        projectHeadline={'CRM For Small Businesses'}
                        projectDescription={
                            <ul>
                                <li>Project Tracking Tool</li>
                                <li>Customer Feedback Surveys</li>
                                <li>Helpdesk Email Client For Support</li>
                            </ul>
                            }
                        />
                        <div className="border">
                            <div className="border-left" />
                            <div className="border-right" />
                        </div>
                        <ProjectCard
                        cardColor={'dark-card'}
                        projectTitle={"Informakers"}
                        projectHeadline={'Versatile Survey App'}
                        projectDescription={<div>
                                <p>Added new features for forms and members portal pages.</p>
                            </div>
                        }
                        />
                        <div className="border">
                            <div className="border-left" />
                            <div className="border-right" />
                        </div>
                        <ProjectCard 
                        projectTitle={"Bloguru"}
                        projectHeadline={'Bilingual Blogging Hub'}
                        projectDescription={<ul>
                                <li>Video Media Management Tool</li> 
                                <li>Customizable Themes For Blogs</li>
                                <li>Email Notification System</li>
                            </ul>
                            }
                        />
                        <div className="border">
                            <div className="border-left" />
                            <div className="border-right" />
                        </div>
                        <ProjectCard 
                        cardColor='dark-card'
                        projectTitle='Sakura Rent-A-Car'
                        projectHeadline='Bilingual Car Rental Website'
                        projectDescription={<p>
                                Deployed updates for bilingual car rental website. 
                                Added translations, modified reservations menu and rental calendar.
                            </p>
                            }
                        />
                    </div>
                </TabPanel>
                <TabPanel className="tab-panel">
                    <div className="cards">

                        <ProjectCard 
                        cardColor='dark-card'
                        projectTitle={'Portfolio Website'}
                        projectHeadline={'React Portfolio Website'}
                        projectDescription={<p>
                            The page you are currently on was made entirely with React. 
                            You can find the source code on my github page.
                            </p>
                            }
                        />
                        <div className="border">
                            <div className="border-left" />
                            <div className="border-right" />
                        </div>
                        <ProjectCard 
                        projectTitle='Illustration Gallery'
                        projectHeadline='Watercolor, Colored Pencil and Ink Artwork'
                        projectDescription={<p>
                                A glimpse of my work can be found on my Instagram, 
                                found <a href="https://www.instagram.com/natalie_art7">here</a>. 
                            </p>
                            }
                        />
                    </div>
                </TabPanel>
            </Tabs>
            <div className="nextpage-container">
                <Link className="nextpage-link" to="/contact">Contact Me <span><i className="fa fa-arrow-right"></i></span></Link>
            </div>
            <Footer />
        </div> 
        );
    }
}
 
export default Projects;