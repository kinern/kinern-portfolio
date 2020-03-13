import React, { Component } from 'react';
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs';
import '../css/projects.css';
import Footer from './footer';

class Projects extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="projects-body">
            <Tabs className="projects-tabs">
                <TabList className="projects-tablist">
                    <Tab className="tab-button">Professional Works</Tab>
                    <Tab className="tab-button">Personal Projects</Tab>
                </TabList>
                <TabPanel className="tab-panel">
                    <div className="card-intro"><h5>The following are websites that I have led or made significant contibutions to as a Full Stack Web Developer.</h5></div>
                    <div className="cards">
                        <div className="card" shadow={0}>
                            <div className="card-title light-card">
                                <h3>PSP Pilot</h3>
                            </div>
                            <div className="card-text">
                                <h4>CRM For Small Businesses</h4>
                                <ul>
                                    <li>Project Tracking Tool</li>
                                    <li>Customer Feedback Surveys</li>
                                    <li>Helpdesk Email Client For Support</li>
                                </ul>
                            </div>
                        </div>
                        <div className="border">
                            <div className="border-left" />
                            <div className="border-right" />
                        </div>
                        <div className="card" shadow={0}>
                            <div className="card-title dark-card">
                                <h3>Informakers</h3>
                            </div>
                            <div className="card-text">
                                <div>
                                    <h4>Versitle Survey Application</h4>
                                    <p>Added new features for forms and members portal pages.</p>
                                </div>
                            </div>
                        </div>
                        <div className="border">
                            <div className="border-left" />
                            <div className="border-right" />
                        </div>
                        <div className="card" shadow={0}>
                            <div className="card-title light-card">
                                <h3>Bloguru</h3>
                            </div>
                            <div className="card-text">
                                <div>
                                    <h4>Bilingual Blogging Hub</h4>
                                    <ul>
                                        <li>Video Media Management Tool</li> 
                                        <li>Customizable Themes For Blogs</li>
                                        <li>Email Notification System</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="border">
                            <div className="border-left" />
                            <div className="border-right" />
                        </div>
                        <div className="card" shadow={0}>
                            <div className="card-title dark-card">
                                <h3>Sakura Rent-A-Car</h3>
                            </div>
                            <div className="card-text">
                                <div>
                                    <h4>Car Rental Website</h4>
                                    <p>Deployed updates for bilingual car rental website. Added translations, modified reservations menu and rental calendar.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel className="tab-panel">
                    <div className="cards">
                        <div className="card" shadow={0}>
                            <div className="card-title dark-card">
                                <h3>Portfolio</h3>
                            </div>
                            <div className="card-text">
                                <h4>React Portfolio Website</h4>
                                <p>The page you are currently on was made entirely with React. You can find the source code on my github page.</p>
                            </div>
                            </div>
                        <div className="border">
                            <div className="border-left" />
                            <div className="border-right" />
                        </div>
                        <div className="card" shadow={0}>
                            <div className="card-title">
                                <h3>Illustration Gallery</h3>
                            </div>
                            <div className="card-text">
                                <h4>Watercolor | Colored Pencil | Ink </h4>
                                <p>
                                    A glimpse of my work can be found on my Instagram, found <a href="https://www.instagram.com/natalie_art7">here</a>. 
                                </p>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
            <Footer />
        </div> 
        );
    }
}
 
export default Projects;