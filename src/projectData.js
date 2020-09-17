import React from 'react';
import { 
    faRunning, 
    faLaptopCode, 
    faPaperPlane, 
    faEnvelope,
    faLaptop, 
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const projectData = [
    {
        title: 'JTrack', 
        headline: 'Mobile Fitness Tracking Application',
        description: 
        <div>
            <p>
                JTtrack is a fitness tracking mobile application. 
                I had originally built this tool as a way to track jump rope exercise 
                routines, hence the "J" in the name. 
            </p>
            <h5>Overview Of Project</h5>
            <ul>
                <li>Daily fitness tracker using Jerry Seinfeld's "Don't Break The Chain" method</li> 
                <li>Interactive calendar and local weather using OpenWeatherMap API</li>
                <li>Statistics page with monthly graph of recorded exercises.</li>
                <li>Bright layout with colorful icons</li>
            </ul>
        </div>,
        icon : <FontAwesomeIcon icon={faRunning} />,
        tags: ['React Native', 'Javascript', 'SQLite', 'Android', 'HTML5', 'CSS3'],
        url: null,
        repo: 'https://github.com/kinern/jtrack',
        headerImage: ''

    },
    {
        title: 'React Porfolio',
        headline: 'New Design For Portfolio Website',
        description: 
        <div>
            <p>
            One of my first projects created with ReactJS. 
            It was originally a crash course for learning the language, 
            but has been gradually improved upon. My most recent updates 
            include adding more imagery and small changes to the style of the site.
            </p>
            <h5>Overview Of Project</h5>
            <ul>
                <li>Compact projects page with snippet of recent project information</li>
                <li>Contact page with integrated external form</li>
                <li>Clean and easy to navigate layout</li>
                <li>Fixed background sections and engaging animations.</li>
            </ul>
        </div>
        ,
        icon : <FontAwesomeIcon icon={faLaptopCode} />,
        tags: ['ReactJS', 'Javascript', 'Bootstrap', 'HTML5', 'CSS3'],
        url: null,
        repo: 'https://github.com/kinern/kinern-portfolio',
        headerImage: ''
    },
    {
        title: 'PSP Pilot',
        headline: "CRM For Small Businesses",
        description: 
        <div>
            <p>
            PSP Pilot is a CRM web application for small business.
            It is a product of the company Pacific Software Publishing LCC.
            As a lead developer, I was in control of creating the backend functionality.
            </p>
            <h5> Major Features </h5>
                <ul>
                    <li>Initial setup and backend design of the web application.</li>
                    <li>Address books for company employee and contact information and recent activity.</li>
                    <li>Assignment tracking tool for projects.</li>
                    <li>Feedback - Survey forms for sending out to clients</li>
                    <li>Helpdesk - Online email client for support teams</li>
                </ul>
            
        </div>
        ,
        tags: [],
        icon: <FontAwesomeIcon icon={faPaperPlane} />,
        url: "https://pilot.pspinc.com",
        repo: null,
        headerImage: ''
    },
    {
        title: 'Helpdesk',
        headline: 'Online Email Client Tool for Support Teams',
        description:
        <div>
            <p>
            Helpesk is an online email client specifically catered for support teams in small businesses.
            This web application was built for Pacific Software Publishing LCC.
            I was the lead developer for the project, and worked with closely in a small team to create the interface and functionality.
            </p>
            <h5>Major Features</h5>
            <ul>
                <li>Designed to allow multiple users to use client smoothly simultaneously.</li> 
                <li>Integrates with the PSP Pilot web application contact directory to save and add new email contacts.</li>
                <li>Sleek and easy to use interface.</li>
            </ul>
        </div>,
        tags: [],
        icon:  <FontAwesomeIcon icon={faEnvelope} />,
        url: "https://pilot.pspinc.com/helpdesk",
        repo: null,
        headerImage: ''
    },
    {
        title: 'Bloguru',
        headline: 'Bilingual Blogging Hub',
        description:
        <div>
            <p>
            Bloguru is an established English | Japanese Bilingual blogging hub. 
            It is a free application from Pacific Software Publishing LCC.
            I worked with a small team to add new features and resolve issues on the website.
            </p>
            <h5>Major Features</h5>
            <ul>
                <li>Designed and created backend system for video upload and management service</li> 
                <li>Updated admin side of new customizable themes for blogs</li>
                <li>Revised email notification system</li>
            </ul>
        </div>,
        tags: [],
        icon:  <FontAwesomeIcon icon={faLaptop} />,
        url: "https://www.bloguru.com",
        repo: null,
        headerImage: ''
    }
];

export default projectData;