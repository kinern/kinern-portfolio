import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Grid, Typography, List, ListItem} from '@mui/material';


class Footer extends Component {
    state = {  }
    render() { 
        return (   
            <footer className="footer">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={8}>
                            <h3>Natalie Kiner</h3>
                            <div className="footer-underline"></div>
                            <p>Portfolio by Natalie Kiner © 2020</p>
                            <p>Stock images from <a href="https://www.unsplash.com" >Unsplash</a></p>
                            <p>Hosted with <a href="https://github.com">GitPages</a></p>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Grid container>
                            <Grid item>
                                <Typography variant="">Site Map</Typography>
                                <List>
                                    <ListItem><Link to="/home">Home</Link></ListItem>
                                    <ListItem><Link to="/contact">Contact</Link></ListItem>
                                </List>
                            </Grid>
                            <Grid item>
                                <Typography variant="">Projects</Typography>
                                <List>
                                    <ListItem><Link to="/jtrack">JTrack</Link></ListItem>
                                    <ListItem><Link to="/portfolio">Portfolio</Link></ListItem>
                                    <ListItem><Link to="/pspprojects">PSP Pilot</Link></ListItem>
                                    <ListItem><Link to="/pspprojects">Helpdesk</Link></ListItem>
                                    <ListItem><Link to="/pspprojects">Bloguru</Link></ListItem>
                                </List>
                            </Grid>
                            <Grid item>
                                <Typography variant="">Social Media</Typography>
                                <List>
                                    <ListItem><a href="https://linkedin.com/in/natalie-kiner" target="_blank" rel="noopener noreferrer">LinkedIn</a></ListItem>
                                    <ListItem><a href="https://github.com/kinern" target="_blank" rel="noopener noreferrer">Github</a></ListItem>
                                    <ListItem><a href="https://instagram.com/natalie_art7" target="_blank" rel="noopener noreferrer">Instagram</a></ListItem>
                                    <ListItem><a href="https://dribbble.com/natalie_kiner" target="_blank" rel="noopener noreferrer">Dribbble</a></ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </footer>
        );
    }
}
 
export default Footer;