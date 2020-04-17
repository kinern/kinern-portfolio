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

//Pseudo-table of projects I have worked on.
//TODO: Seperate out type languages so that they can be used as filterable classNames in ProjectCard components

/*
ProjectData:
-title 
-- type
-- headline
-- icon
-- link
-- description
*/
const ProjectData = {
    "JTrack" : {
        'type' : 'React Native|SQLite',
        'filters': ['react', 'react-native', 'sqlite', 'sql', 'mobile'],
        'color' : "blue",
        'headline' : "Fitness Tracking Mobile App",
        'icon' : <FontAwesomeIcon icon={faRunning} />,
        'link' : "https://github.com/kinern/jtrack",
        'description' : 
        <ul>
            <li>Daily fitness tracker using Jerry Seinfeld's "Don't Break The Chain" method</li> 
            <li>Homepage with interactive calendar and local weather using OpenWeatherMap API</li>
            <li>Statistics page with monthly graph of recorded exercises.</li>
        </ul>
    },
    "Portfolio" : {
        'type' : 'ReactJS',
        'filters': ['react', 'reactjs', 'js'],
        'color' : "blue",
        'headline' : "React Portfolio Website",
        'icon': <FontAwesomeIcon icon={faLaptopCode} />,
        'link' : "https://github.com/kinern/kinern-portfolio",
        'description':         
        <ul>
            <li>Straightforward portfolio website with about, projects and contact pages.</li> 
            <li>Uses Material UI, MasonryJS React component, and other libraries.</li>
            <li>Source code and more information is on the git repo.</li>
        </ul>
    },
    "PSP Pilot" :  {
        'type': 'PHP|JS',
        'filters': ['php', 'cakephp', 'sql', 'mysql', 'mariadb', 'js', 'jquery'],
        'color' : "green",
        'headline' : "CRM For Small Businesses",
        'icon' : <FontAwesomeIcon icon={faPaperPlane} />,
        'link' : "https://pilot.pspinc.com",
        'description' : 
        <ul>
            <li>Client and contact management tools</li>
            <li>Project tracking with assignments between users.</li>
            <li>Activity logging and survey/email displays.</li>
            <li>Built backend and frontend with team at PSP Inc.</li>
        </ul>
    },
    "Helpdesk" : {
        'type': 'PHP|JS',
        'filters': ['php', 'cakephp', 'sql', 'mysql', 'mariadb', 'js', 'jquery'],
        'color' : "green",
        'headline' : "Addon service for PSP Pilot",
        'icon': <FontAwesomeIcon icon={faEnvelopeOpenText} />,
        'link' : "https://pilot.pspinc.com/helpdesk",
        'description' : 
        <ul>
            <li>Online email client for helpdesk part of businesses.</li>
            <li>View, reply and save emails to PSP Pilot contacts.</li>
            <li>Worked with team at PSP Inc to build tool, with solo development for backend.</li>
        </ul>
    },
    "Informakers": {
        'type': 'PHP|JS',
        'filters': ['php', 'cakephp', 'sql', 'mysql', 'mariadb', 'js', 'jquery'],
        'color' : "green",
        'headline' : "Versatile Survey Application",
        'icon': <FontAwesomeIcon icon={faPaste} />,
        'link' : "https://informakers.com",
        'description' : 
        <ul>
            <li>Added new features for forms and members portal pages.</li>
            <li>Deployed backend and frontend updates with team at PSP Inc.</li>
        </ul>
    },
    "Bloguru" : {
        'type': 'PHP|JS',
        'filters': ['php', 'sql', 'mysql', 'mariadb', 'js', 'jquery'],
        'color' : "green",
        'headline' : "Bilingual Blogging Hub",
        'icon':  <FontAwesomeIcon icon={faUsers} />,
        'link' : "https://bloguru.com",
        'description' : 
        <ul>
            <li>Video Media Management Tool</li> 
            <li>Customizable Themes For Blogs</li>
            <li>Email Notification System</li>
            <li>Worked with team at PSP Inc to add updates, backend development for video service.</li>
        </ul>
    },
    "Sakura Rent-A-Car" : {
        'type': 'PHP|JS',
        'filters': ['php', 'sql', 'mysql', 'mariadb', 'js', 'jquery'],
        'color' : "green",
        'headline' : "Bilingual Car Rental Website",
        'icon': <FontAwesomeIcon icon={faCar} />,
        'link' : "https://www.sakura-rentacar.com",
        'description' : 
        <ul>
            <li>Deployed updates for bilingual car rental website.</li> 
            <li>Added translations, modified reservations menu and rental calendar.</li>
            <li>Worked with team at PSP Inc to add updates.</li>
        </ul>
    },
    "Buy Green Signs" : {
        'type': 'PHP|JS',
        'filters': ['php', 'sql', 'mysql', 'mariadb', 'js', 'jquery'],
        'color' : "green",
        'headline' : "Design Printing Service",
        'icon': <FontAwesomeIcon icon={faImages} />,
        'link' : false,
        'description' : 
        <ul>
            <li>Fullstack development for website with SVG editing tool.</li> 
            <li>Contibuted to reamping and intergrating SVG editing library to new site.</li>
            <li>Added SVG resizing, fonts and other features to online tool.</li>
            <li>Worked with team at PSP Inc to build website and add updates.</li>
        </ul>
    },
    "Illustration Gallery" : {
        'type' : 'Artwork',
        'filters': ['other'],
        'color' : "orange",
        'headline' : "Watercolor | Colored Pencil",
        'icon': <FontAwesomeIcon icon={faPalette} />,
        'link' : "https://instagram.com/natalie_art7",
        'description' : 
        <p>
            I have been drawing for most of my life. 
            Recently I learned to paint with watercolors.
            You can view some of my artwork on my instagram gallery. 
        </p>
    }

}

export default ProjectData;
