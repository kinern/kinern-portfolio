import React from 'react';
import { 
    faRunning, 
    faEnvelopeOpenText, 
    faLaptopCode, 
    faPaperPlane, 
    faCar, 
    faPalette, 
    faImages,
    faPaste,
    faUsers,
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
        tags: ['ReactJS', 'React Native', 'Javascript', 'Mobile Apps', 'SQLite', 'Android'],
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
            include using Bootstrap and adding an inqury form to the 
            contact page.
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
        tags: ['ReactJS', 'Web Apps', 'Bootstrap', 'Javascript'],
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
        tags: ['php', 'cakephp', 'sql', 'mysql', 'mariadb', 'js', 'jquery'],
        icon: <FontAwesomeIcon icon={faPaperPlane} />,
        url: "https://pilot.pspinc.com",
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
        tags: ['PHP', 'SQL', 'MySQL', 'Javascript', 'JQuery'],
        icon:  <FontAwesomeIcon icon={faCar} />,
        url: "https://www.sakura-rentacar.com",
        repo: null,
        headerImage: ''
    }
];

export default projectData;