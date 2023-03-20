import React from 'react';

import portraitImage from '../../../images/portfolio-portrait.svg';
import {Container, Grid, Typography} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Timeline from '../../timeline/Timeline';

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {variant: 'aboutText'},
                    style : {
                        color: '#555',
                    },
                },
            ],
        }
    }
});


const AboutSmall = () => {
    return(
        <ThemeProvider theme={theme}>
            <Container maxWidth={'md'} style={{height: '80vh', display: 'flex', alignItems: 'center'}} id="about">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <div>
                            <object data={portraitImage} height="100%"></object>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Typography variant="aboutText">
                            Hi! My name is Natalie Kiner and I am a Web Developer located in the Pacific Northwest. 
                            I have worked on a number of applications, including the blogging hub Bloguru and the CRM suite PSP Pilot. 
                            <br />
                            <br />
                            I enjoy working with the latest technologies and have a number of personal projects.
                            <br />
                            <br />
                            Outside the tech world, I am passionate about art. I create line-art and watercolor illustrations. A glimpse of my art can be seen on <a style={{color: '#B89E97'}}href="https://instagram.com/natalie_art7">Instagram</a>.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}

export default AboutSmall;