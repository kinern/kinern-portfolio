import React from 'react';

import {NavLink, Link as RouterLink} from 'react-router-dom';
import {
    Container,
    Grid,
    Link,
    Typography
} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiLink: {
            variants: [
                {
                    props: {variant: 'linkText'},
                    style: {
                        color: '#FFF',
                        fontSize: '1em',
                        textDecoration: 'none',
                        '&:hover' : {
                            color: '#EEE',
                            textDecoration: 'none'
                        }
                    }
                },
            ]
        },
        MuiTypography: {
            variants: [
                {
                    props: {variant: 'title'},
                    style: {
                        color: '#DDD',
                        fontSize: '1.6em',
                        display: 'block',
                    }
                },
                {
                    props: {variant: 'subtitle'},
                    style: {
                        color: '#DDD',
                        fontSize: '1.4em',
                        display: 'block',
                    }
                },
                {
                    props: {variant: 'text'},
                    style: {
                        color: '#DDD',
                        fontSize: '1em',
                        display: 'block',
                    }
                },
                
            ]
        }
    }
});


const siteMapLinks = [
    {to: '/home', title: 'Home'},
    {to: '/contact', title: 'Contact'}
];


const projectLinks = [
    {to: '/jtrack', title: 'JTrack'},
    {to: '/portfolio', title: 'Portfolio'},
    {to: '/pspprojects', title: 'Helpdesk'},
    {to: '/pspprojects', title: 'PSP Pilot'},
    {to: '/pspprojects', title: 'Bloguru'},
];

const socialMediaLinks =[
    {to: 'https://linkedin.com/in/natalie-kiner', title: 'LinkedIn'},
    {to: 'https://github.com/kinern', title: 'GitHub'},
    {to: 'https://dribbble.com/natalie_kiner', title: 'Dribbble'},
    {to: 'https://instagram.com/natalie_art7', title: 'Instagram'},
];



const Footer = () => {
    return (     
        <ThemeProvider theme={theme}> 
            <Container maxWidth={false} style={{backgroundColor: '#555', paddingTop: 30, paddingBottom: 80}}>
                <Grid container spacing={3}>
                    
                    <Grid item xs={12} md={7}>
                        <Typography variant="title">Natalie Kiner</Typography>
                        <Typography variant="text">Portfolio Created by Natalie Kiner © 2022</Typography>
                        <Typography variant="text">Stock images from <Link variant="linkText" href="https://www.unsplash.com" >Upsplash</Link></Typography>
                        <Typography variant="text">Hosted with <Link variant="linkText" href="https://github.com">GitPages</Link></Typography>
                    </Grid>

                    <Grid item xs={12} md={5}>
                        <Grid container>
                            <Grid item sm={4} style={{display:'flex', flexDirection: 'column'}}>
                                <Typography variant="subtitle">Site Map</Typography>
                                <ul style={{listStyle: 'none', margin: 0, padding: 0}}>
                                { siteMapLinks.map((item)=>{ return <li><Link variant="linkText" component={NavLink} to={item.to}>{item.title}</Link></li>}) }
                                </ul>
                            </Grid>
                            <Grid item sm={4}>
                                <Typography variant="subtitle">Projects</Typography>
                                <ul style={{listStyle: 'none', margin: 0, padding: 0}}>
                                { projectLinks.map((item)=>{ return <li><Link variant="linkText" component={NavLink} to={item.to}>{item.title}</Link></li>}) }
                                </ul>
                            </Grid>
                            <Grid item sm={4}>
                                <Typography variant="subtitle">Social Media</Typography>
                                <ul style={{listStyle: 'none', margin: 0, padding: 0}}>
                                { socialMediaLinks.map((item)=>{ return <li><Link variant="linkText" href={item.to} target="_blank" rel="noopener noreferrer">{item.title}</Link></li>}) }
                                </ul>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}
 
export default Footer;