import React from 'react';
import ProjectCarouselItem from './ProjectCarouselItem';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import pspPilotImg from "../../../images/projects/avel-chuklanov-b1qpD3bhPOc-unsplash.jpg";
import helpdeskImg from "../../../images/projects/julian-hochgesang-Dkn8-zPIbwo-unsplash.jpg";
import bloguruImg from '../../../images/projects/sergey-zolkin-_UeY8aTI6d0-unsplash.jpg';
import portfolioImg from '../../../images/projects/magdalena-smolnicka-Y-G8GwcyOss-unsplash.jpg';
import jTrackImg from '../../../images/projects/ryan-de-hamer-pCT8ag1o3nU-unsplash.jpg';

const ProjectCarousel = () => {

    const projectData = [
        {
            imageUrl: jTrackImg, 
            title: "JTrack", 
            description:"Streamlined Mobile App For Tracking Workouts", 
            link:"/jtrack", 
            longDescription: `
            Mobile application to track workout sessions each month. 
            A personal project created using Expo, React Native, and SQLite. 
            `
        },
        {
            imageUrl: portfolioImg, 
            title: "Portfolio", 
            description:"Personal Website with Colorful Design", 
            link:"/portfolio", 
            longDescription: `
            I built this portfolio website in early 2020 as a way to practice my React skills.
            It has gone through numerous changes, each improving on the design and code.
            ` 
        },
        {
            imageUrl: pspPilotImg, 
            title: "PSP Pilot", 
            description:"Launching Businesses in the Right Direction", 
            link:"/psp-pilot", 
            longDescription: `
            PSP Pilot is a CRM web application for businesses to manage clients, employees and projects.
            A product of Pacific Software Publishing.
            ` 
        },
        {
            imageUrl: helpdeskImg, 
            title: "Helpdesk", 
            description:"Building Strong Connections for Clients and Support", 
            link:"/helpdesk", 
            longDescription: `
            Helpdesk is an online email client tool for responding to client requests.
            It works in tandem with PSP Pilot, automating client creation and storing email threads.
            Helpdesk is a service of PSP Pilot, both of which are products of Pacific Software Publishing.
            ` 
        },
        {
            imageUrl: bloguruImg, 
            title: "Bloguru", 
            description:"Bilingual Blogging Hub", 
            link:"/bloguru", 
            longDescription: `
            As a long-established bilingual blogging website for 
            English & Japanese speakers, Bloguru has a wide variety of features to create unique blogs with.
            Bloguru is a product of Pacific Software Publishing. 
            `
        },

    ];

    const renderProjectCarousel = () =>{
        return projectData.map((item)=>{
            return(
                <SplideSlide key={item.title}>
                    <ProjectCarouselItem 
                    imageUrl={item.imageUrl} 
                    title={item.title}  
                    description={item.description} 
                    link={item.link} 
                    longDescription={item.longDescription}
                    />
                </SplideSlide>
            );
        });
    }

    return(
        <div className="container">
            <Splide
            options={ {
                rewind : true,
                perPage: 1,
                perMove: 1,
                gap    : '1rem',
                speed   : 1000,
                height : 400
            } }
            >
                {renderProjectCarousel()}
            </Splide>
        </div>
    );
}

export default ProjectCarousel;