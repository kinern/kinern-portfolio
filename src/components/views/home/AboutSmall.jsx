import React from 'react';

import portraitImage from '../../../images/portfolio-portrait.svg';
import {Container, Grid, Typography} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {styled} from '@mui/system';

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


const Div = styled("div", {
    name: "MuiDiv",
    overridesResolver: (props, styles) => {
        return [styles.root];
    }
})();

const AboutSmall = () => {
    return(
        <ThemeProvider theme={theme}>
            <Container maxWidth={'md'} style={{minHeight: '80vh', display: 'flex', alignItems: 'center', padding:'5vh 12px'}} id="about">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <Div sx={{width:{xs:'50%', md:'80%'}, margin:'auto'}}>
                            <object data={portraitImage} aria-label="portfolio-image" height="100%"></object>
                        </Div>
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