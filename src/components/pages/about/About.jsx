import React, { Component } from 'react';

import {Box, Typography, Grid, Paper} from '@mui/material';

import AOS from 'aos';
import 'aos/dist/aos.css';

import portraitImage from '../../../images/portfolio-portrait.svg';

class About extends Component {
    state = { }

    componentDidMount(){
        AOS.init({
          duration : 1500
        });
    }

    render() { 
        return (  
            <Box sx={{backgroundColor: "white", padding: "10px 0 50px 0", margin: "0 0 20vh 0"}}>
                <Grid container spacing={4} className="about" id="about">
                    <Grid item xs={12} md={6}>
                        <Typography sx={{textAlign: 'center', padding: '50px'}} variant="h2">Hello!</Typography>
                        <Box sx={{padding: '0 50px 0 50px'}}className="portrait-container">
                            <object data={portraitImage} height="100%"></object>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <hr />
                        <Typography varaint="body" padding={4}>
                            Hi! My name is Natalie Kiner and I am a Web Developer located in the Pacific Northwest. 
                            I have worked on a number of web apps, including the blogging hub Bloguru and the CRM suite PSP Pilot. 
                        </Typography>
                        <Typography varaint="body" padding={4}>
                            In addition, I like learning about the latest technologies and have a number of personal projects. 
                            Lately I have been updating JTrack, a fitness tracking mobile app.
                        </Typography>
                        <Typography varaint="body" padding={4}>
                            Outside of the tech world, I am passionate about art. 
                            I mainly create lineart or watercolor illustrations, but have some experience with digital work. 
                            Aside from the above self-portrait, you can see more of my artwork on <a href="https://instagram.com/natalie_art7">Instagram</a>.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        );
    }
}
 
export default About;