import React from 'react';
import {Link} from 'react-router-dom';

import { mdiArrowRight } from '@mdi/js';
import Icon from '@mdi/react';

const ProjectsHome = () => {

    const leftColSquaresData = [
        {
            class:"psp-pilot-square",
            title: "PSP Pilot", 
            description:"Launching Businesses in the Right Direction", 
            link:"/pspprojects", 
            longDescription: `
            PSP Pilot is a CRM web application for businesses to manage clients, employees and projects.
            A product of Pacific Software Publishing.
            ` 
        },
        {
            class:"jtrack-square",
            title: "JTrack", 
            description:"Streamlined Mobile App For Tracking Workouts", 
            link:"/jtrack", 
            longDescription: `
            Mobile application to track workout sessions each month. 
            A personal project created using Expo, React Native, and SQLite. 
            `
        }
    ];

    const rightColSquaresData = [
        {
            class:"helpdesk-square",
            title: "Helpdesk", 
            description:"Building Strong Connections for Clients and Support", 
            link:"/pspprojects", 
            longDescription: `
            Helpdesk is an online email client tool for responding to client requests.
            It works in tandem with PSP Pilot, automating client creation and storing email threads.
            Helpdesk is a service of PSP Pilot, both of which are products of Pacific Software Publishing.
            ` 
        },
        {
            class:"bloguru-square",
            title: "Bloguru", 
            description:"Bilingual Blogging Hub", 
            link:"/pspprojects", 
            longDescription: `
            As a long-established bilingual blogging website for 
            English & Japanese speakers, Bloguru has a wide variety of features to create unique blogs with.
            Bloguru is a product of Pacific Software Publishing. 
            `
        },
        {
            class: "portfolio-square",
            title: "Portfolio", 
            description:"Personal Website with Colorful Design", 
            link:"/portfolio", 
            longDescription: `
            I built this portfolio website in early 2020 as a way to practice my React skills.
            It has gone through numerous changes, each improving on the design and code.
            ` 
        },

    ];


    const renderSquareButtons = (projectData) => {
        const squares = projectData.map((item)=>{
            return (
                <div className={`item ${item.class}`}>
                    <Link to={item.link} style={{ textDecoration: 'none' }}>
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <h2>{item.description}</h2>
                            <Link to={item.link}>Learn more <Icon path={mdiArrowRight} size={0.9}/></Link>
                        </div>
                    </Link>
                </div>
            );
        });
        return (
            <div className="flex-col">
                {squares}
            </div>
        )
    }

    return(
        <div className="project-squares-container">
            <h1>Case Studies</h1>
            <div className="squares">
                {renderSquareButtons(leftColSquaresData)}
                {renderSquareButtons(rightColSquaresData)}
            </div>
        </div>
    );
};

export default ProjectsHome;