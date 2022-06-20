import React from 'react';
import {
    Container,
    Grid,
    Typography,
    Link,
} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {styled} from '@mui/system';

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {variant: 'titleText'},
                    style : {
                        color: '#555',
                        fontSize: '2.5em',
                        marginTop: 30,
                        marginLeft: -3,
                        display: 'block',
                        textTransform: 'uppercase'
                    },
                },
                {
                    props: {variant: 'title2Text'},
                    style : {
                        color: '#555',
                        fontSize: '1.6em',
                        marginBottom: 5,
                        display: 'block',
                        textAlign: 'center',
                    },
                },
                {
                    props: {variant: 'subtitleText'},
                    style : {
                        color: '#555',
                        fontSize: '1em',
                        fontWeight: 'bold',
                        marginTop: 5,
                        marginBottom: 5,
                        display: 'block'
                    },
                },
                {
                    props: {variant: 'descriptionText'},
                    style : {
                        color: '#555',
                        fontSize: '1em',
                        marginBottom: 30,
                        display: 'block'
                    },
                },
                {
                    props: {variant: 'footerText'},
                    style : {
                        color: '#7e7e7e',
                        fontSize: '0.8em',
                        display: 'block',
                        textAlign: 'center'
                    },
                },
                {
                    props: {variant: 'yearText'},
                    style : {
                        color: '#7e7e7e',
                        fontSize: '1em',
                        marginBottom: 30,
                        display: 'block',
                        textTransform: 'uppercase'
                    },
                },


            ]
        },
    }
});


const PSPProjects = () => {

    const BloguruInfo = () => 
        <div style={{marginTop: 100, marginBottom: 100}}>
            <Typography variant="titleText">Bloguru</Typography>
            <Typography variant="yearText">Year 2016 - 2019</Typography>

            <div>
                    <Typography variant="descriptionText">
                        <strong>Bloguru</strong> is a long-established bilingual blogging website for 
                        English & Japanese speakers. 
                    </Typography>

                    <Typography variant="title2Text">Highlights</Typography>
                    <Typography variant="subtitleText">Video Management System</Typography>
                    <Typography variant="descriptionText"> 
                        One of the highlights of Bloguru is the user video management tool, located within the member interface.
                        For this feature, I designed and implemented a backend system for formatting, storing, and retrieving video data and information. 
                        This was one of the larger projects that I was the main developer for. Along with the main storage system, there was a number of extra parts that went into building this feature. 
                        These include: Automated thumbnail generation for uploaded videos, hotlinking preventon, integration with Twitter and Facebook APIs for blog posting.
                    </Typography>
                    <Typography variant="subtitleText">Notifications, Emails and Social Media</Typography>
                    <Typography variant="descriptionText">
                        I maintained and updated automated scripts for emails and notifications for various conditions, such as blog inactivity and the blog daily ranking system.
                        Furthermore, I revamped the API regarding users linking their social media accounts and automatically adding new posts to their user feeds.
                    </Typography>
                    <Typography variant="subtitleText">Custom Themes</Typography>
                    <Typography variant="descriptionText">
                        Users of Bloguru have a vast variety of colorful and novel themes to pick from. 
                        There is also the option of building one's own custom theme to create a unique design.
                        One of the projects our team had was to modernize the custom theme generator, including new areas that could be colored, dropdown menus, and new header image placement. 
                        I worked closeley with a front end design and developer to update this tool.
                        My work included handling saved theme data as well as refactoring the theme generator interface functionality.
                    </Typography>
                    <Typography variant="footerText"> 
                        Helpdesk is a product of Pacific Software Publishing Inc. 
                    </Typography>
            </div>
        </div>;

    const HelpDeskInfo = () => 
        <div style={{marginTop: 100, marginBottom: 100}}>
            <Typography variant="titleText">Helpdesk</Typography>
            <Typography variant="yearText">Year 2019</Typography>

            <div>
                <Typography variant="descriptionText">
                    <strong>Helpdesk</strong> is an online email client specifically 
                    catered for support teams in small businesses.
                    This tool connects directly to the client section of PSP Pilot. 
                    Email threads are kept track of and displayed in an organized fashion.
                    New clients can be added on Helpdesk, which then get generated 
                    on PSP Pilot automatically. 
                </Typography>

                <Typography variant="title2Text">Highlights</Typography>

                <Typography variant="subtitleText">Online Email Client</Typography>
                <Typography variant="descriptionText">
                    Helpdesk is an online email client that enhances the user experience for customer support teams. 
                    I was the lead developer in implementing the backend structure and email system.
                </Typography>
                <Typography variant="subtitleText">PSP Pilot Integration</Typography>
                <Typography variant="descriptionText">
                    There were several aspects to connecting Helpdesk to PSP Pilot. 
                    These included retieving and automatically adding new client and customer information to PSP Pilot,  
                    displaying message threads on PSP Pilot's client and customer modules, retriving saved user 
                    information for sending reply messages.
                </Typography>
                <Typography variant="footerText"> Bloguru is a product of Pacific Software Publishing Inc. </Typography>
            </div>
        </div>;

    const PSPPilotInfo = () => 
        <div style={{marginTop: 100, marginBottom: 100}}>
            <Typography variant="titleText">PSP Pilot</Typography>
            <Typography variant="yearText">Year 2019</Typography>

            <div>
                <Typography variant="descriptionText">
                    <strong>PSP Pilot</strong> is a CRM tool for small businesses.
                    Employee, client and project tracking are all combined within the application.
                    I was a lead developer in the creation of PSP Pilot, 
                    and had an essential role in the back-end development of the product.
                    <br />
                    <br />
                    Additional services for PSP Pilot include Feedback and Help Desk.
                    <br />
                    <br />
                    <strong>Feedback</strong> is a survey generating tool that connects to the client section of PSP Pilot.
                    As a team member for Feedback, my role included updating the survey 
                    retrieval and display system, improving overall performance.
                    <br />
                    <br />
                    <strong>Help Desk</strong> is an online email tool that allows support teams to 
                    quickly handle requests and record email threads into PSP Pilot.
                    I played a major role in the creation and development for this project. 
                    More information can be found in the next project section.
                    <br />
                    <br />
                </Typography>
                <Typography variant="footerText">
                    PSP Pilot is a product of Pacific Software Publishing Inc.
                </Typography>

            </div>
        </div>;

    return(
        <ThemeProvider theme={theme}>
            <Container maxWidth={'md'} style={{marginTop: 80, marginBottom: 80}}>
                <PSPPilotInfo />
                <HelpDeskInfo />
                <BloguruInfo />
            </Container>
        </ThemeProvider>
    );
}

export default PSPProjects;