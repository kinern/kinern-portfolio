import React from 'react';
/*
import { 
    faRunning, 
    faLaptopCode, 
    faPaperPlane, 
    faEnvelope,
    faLaptop, 
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
*/

const projectData = [
    {
        title: 'JTrack', 
        headline: 'Streamlined Mobile App For Tracking Workouts',
        description: 
        <div>
            <p>
                <strong>JTrack</strong> is a mobile application for tracking daily workout routines.
                It includes a monthly calendar with the ability to add in minutes of exercise.
                There is a statistics page for visually showing the progress being made.
                Originally, it was created as a way to manage daily jump rope routines, 
                hence the "J" in the name.
            </p>
            <h5>Features</h5>
            <ul>
                <li>Implements Jerry Seinfeld's "Don't Break The Chain" method</li> 
                <li>Displays local weather using OpenWeatherMap API</li>
                <li>Generates graph of recorded exercises on Statistics screen</li>
                <li>Bright layout with colorful icons</li>
            </ul>
        </div>,
        icon : /*<FontAwesomeIcon icon={faRunning} />*/ null,
        tags: ['React Native', 'Javascript', 'SQLite', 'Android', 'HTML5', 'CSS3'],
        url: 'https://kinern.github.io/jtrack',
        repo: 'https://github.com/kinern/jtrack',
        headerImage: ''

    },
    {
        title: 'React Porfolio',
        headline: 'Single-Scroll Portfolio with Colorful Design',
        description: 
        <div>
            <p>
                <strong>This website</strong> is a simple single-scrolling 
                portfolio to show who I am and what I do. It contains an 
                overview about myself and my projects, along with a section 
                to contact me by.
            </p>
            <p>

            </p>
        </div>
        ,
        icon : /*<FontAwesomeIcon icon={faLaptopCode} />*/ null,
        tags: ['ReactJS', 'Javascript', 'Bootstrap', 'HTML5', 'CSS3'],
        url: null,
        repo: 'https://github.com/kinern/kinern-portfolio',
        headerImage: ''
    },
    {
        title: 'PSP Pilot',
        headline: "Launching Businesses In The Right Direction",
        description: 
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
        ,
        tags: [],
        icon: /*<FontAwesomeIcon icon={faPaperPlane} />*/ null,
        url: "https://pilot.pspinc.com",
        repo: null,
        headerImage: ''
    },
    {
        title: 'Helpdesk',
        headline: 'Building Strong Connections Between Clients And Support Teams',
        description:
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
        </div>,
        tags: [],
        icon:  /*<FontAwesomeIcon icon={faEnvelope} />*/ null,
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
        </div>,
        tags: [],
        icon:  /*<FontAwesomeIcon icon={faLaptop} />*/ null,
        url: "https://www.bloguru.com",
        repo: null,
        headerImage: ''
    }
];

export default projectData;