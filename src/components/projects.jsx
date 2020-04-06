import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/projects.css';
import Footer from './footer';
import ProjectCard from './projectcard';
import Masonry from 'react-masonry-component';



class Projects extends Component {
    state = {  }

    componentDidMount = () => {
        document.getElementsByClassName('content')[0].scrollTop = 0;
    }

    render() { 
        return ( 
        <div className="projects-body">
            <div className="card-intro"><h2>Projects</h2></div>
                <div className='cards-container'>
                <Masonry className={'cards'} options={{fitWidth: true}}>
                <ProjectCard 
                    projectType={'ReactJS'}
                    cardColor={'blue-card'}
                    projectTitle={'Portfolio'}
                    projectHeadline={'React Portfolio Website'}
                    projectDescription={<ul>
                            <li>Straightforward portfolio website with about, projects and contact pages.</li> 
                            <li>Uses Material UI, MasonryJS React component, and other libraries.</li>
                            <li>Source code and more information available on my <a href="https://github.com/kinern">github profile.</a></li>
                        </ul>
                        }
                    />
                    <ProjectCard 
                    projectType={'PHP|JS'}
                    cardColor={'green-card'}
                    projectTitle={'PSP Pilot'}
                    projectHeadline={'CRM For Small Businesses'}
                    projectDescription={
                        <ul>
                            <li>Client and contact management tools</li>
                            <li>Project tracking with assignments between users.</li>
                            <li>Activity logging and survey/email displays.</li>
                            <li>Built backend and frontend with team at PSP Inc.</li>
                        </ul>
                        }
                    />
                                        <ProjectCard 
                    projectType={'PHP|JS'}
                    cardColor={'orange-card'}
                    projectTitle={'Helpdesk'}
                    projectHeadline={'Addon service for PSP Pilot'}
                    projectDescription={
                        <ul>
                            <li>Online email client for helpdesk part of businesses.</li>
                            <li>View, reply and save emails to PSP Pilot contacts.</li>
                            <li>Worked with team at PSP Inc to build tool, with solo development for backend.</li>
                        </ul>
                        }
                    />
                    <ProjectCard
                    projectType={'PHP|JS'}
                    projectTitle={"Informakers"}
                    projectHeadline={'Versatile Survey Application'}
                    projectDescription={<ul>
                            <li>Added new features for forms and members portal pages.</li>
                            <li>Deployed backend and frontend updates with team at PSP Inc.</li>
                        </ul>
                    }
                    />
                    <ProjectCard 
                    projectType={'PHP|JS'}
                    cardColor={'orange-card'}
                    projectTitle={"Bloguru"}
                    projectHeadline={'Bilingual Blogging Hub'}
                    projectDescription={<ul>
                            <li>Video Media Management Tool</li> 
                            <li>Customizable Themes For Blogs</li>
                            <li>Email Notification System</li>
                            <li>Worked with team at PSP Inc to add updates, backend development for video service.</li>
                        </ul>
                        }
                    />
                    <ProjectCard 
                    projectType={'PHP|JS'}
                    projectTitle='Sakura Rent-A-Car'
                    projectHeadline='Bilingual Car Rental Website'
                    projectDescription={<ul>
                            <li>Deployed updates for bilingual car rental website.</li> 
                            <li>Added translations, modified reservations menu and rental calendar.</li>
                            <li>Worked with team at PSP Inc to add updates.</li>
                        </ul>
                        }
                    />
                    <ProjectCard 
                    projectType={'PHP|JS'}
                    cardColor={'green-card'}
                    projectTitle={'Buy Green Signs'}
                    projectHeadline={'Design Printing Service'}
                    projectDescription={<ul>
                            <li>Fullstack development for website with SVG editing tool.</li> 
                            <li>Contibuted to reamping and intergrating SVG editing library to new site.</li>
                            <li>Added SVG resizing, fonts and other features to online tool.</li>
                            <li>Worked with team at PSP Inc to build website and add updates.</li>
                        </ul>
                        }
                    />
                    <ProjectCard 
                    projectType={'Artwork'}
                    cardColor={'blue-card'}
                    projectTitle='Illustration Gallery'
                    projectHeadline='Watercolor | Colored Pencil'
                    projectDescription={<p>
                            A glimpse of my work can be found on my Instagram, 
                            found <a href="https://www.instagram.com/natalie_art7">here</a>. 
                        </p>
                        }
                    />
                </Masonry>
                </div>
            <div className="nextpage-container">
                <Link className="nextpage-link" to="/contact">Contact Me <span><i className="fa fa-arrow-right"></i></span></Link>
            </div>
            <Footer />
        </div> 
        );
    }
}
 
export default Projects;