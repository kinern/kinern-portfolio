import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import { mdiArrowRight } from '@mdi/js';
import Icon from '@mdi/react';
import {Link, Grid, Typography} from '@mui/material';

import {createTheme, ThemeProvider} from '@mui/material/styles';
import {styled} from '@mui/system';

const theme = createTheme({
    components: {
        MuiDiv : {
            styleOverrides: {
                root: {
                    backgroundSize: "200% 100%",
                    backgroundImage: "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.1))",
                    '-webkit-transition': "background-position ease 0.8s",
                    '-moz-transition': "background-position ease 0.8s",
                    transition: "background-position ease 0.8s",
                    '&:hover':{
                        backgroundPosition: "-100% 0%",
                    }
                }
            }
        },
        MuiLink : {
            variants : [
                {
                    props: {variant: 'projectLink'},
                    style : {
                        textDecoration: 'none',
                        backgroundColor:'green',
                        '&:hover' : {
                            textDecoration: 'none',
                        },
                        '&:visited': {
                            textDecoration: 'none',
                        }
                    }
                }
            ],
        },
        MuiTypography: {
            variants: [
                {
                    props: {variant: 'projectTitle'},
                    style : {
                        color: '#555',
                        display: 'block',
                        fontSize: '2.4em',
                        textTransform: 'uppercase',
                    },
                },
                {
                    props: {variant: 'projectHeadline'},
                    style : {
                        color: '#555',
                        display: 'block',
                        fontWeight: 'bold',
                        fontSize: '1.2em',
                    },
                },
                {
                    props: {variant: 'projectLinkText'},
                    style : {
                        color: '#7e7e7e',
                        display: 'inline',
                        fontWeight: 'bold',
                        fontSize: '1em',
                        marginRight: 5,
                    },
                },
            ],
        },
    }
});

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
        description:"Streamlined App For Tracking Workouts", 
        link:"/jtrack", 
        longDescription: `
        Mobile application to track workout sessions each month. 
        A personal project created using Expo, React Native, and SQLite. 
        `
    },
    {
        class:"hearing-room",
        title:"Hearing Room",
        description: "Hackathon Project the Explores the Capabilities of Machine Learning",
        link: "/hearingroom",
        longDescription: "Hackathon project utilizing the Symbl.ai service and machine learning to build collections of topics from videos of public speakers."

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

const Div = styled("div", {
    name: "MuiDiv",
    overridesResolver: (props, styles) => {
        return [styles.root];
    }
})();


const renderProjectSquares = (projectData) => {
    const squares = projectData.map((item)=>{
        return (
            <Grid item xs={12} md={6} key={item.title}>
                <Link component={RouterLink} variant="projectLink" to={item.link}>
                    <Div>
                        <div style={{
                            width: '100%',
                            height: '180px',
                            padding: 25,
                            backgroundImage:  "linear-gradient(135deg, #fff 25%, transparent 25%), linear-gradient(225deg, #fff 25%, transparent 25%), linear-gradient(45deg, #fff 25%, transparent 25%), linear-gradient(315deg, #fff 25%, transparent 25%)",
                            backgroundPosition:  "60px 0, 60px 0, 0 0, 0 0",
                            backgroundSize: "60px 60px",
                            backgroundRepeat: "repeat",        
                        
                        }}>

                            <Typography variant="projectTitle" >{item.title}</Typography>
                            <Typography variant="projectHeadline" >{item.description}</Typography>
                            <div>
                                <Typography variant="projectLinkText">Learn more</Typography>
                                <Icon color="#7e7e7e" path={mdiArrowRight} size={1}/>
                            </div>
                        </div>
                    </Div>
                </Link>
            </Grid>
        );
    });
    return squares;
};

const Projects = () => {

    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={4} className="squares">
                {renderProjectSquares(leftColSquaresData)}
                {renderProjectSquares(rightColSquaresData)}
            </Grid>
        </ThemeProvider>
    );
};

export default Projects;