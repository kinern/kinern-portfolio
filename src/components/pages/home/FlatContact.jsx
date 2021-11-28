import React, { Component } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import {Box, Typography, TextField, Button, Grid} from '@mui/material';


class FlatContact extends Component {

    componentDidMount(){
        AOS.init({
          duration : 1500
        })
    }
    
    render() { 
        return ( 
            <div className="contact-outer"> 
                <div className="contact-top"></div>
                <div className="flat-contact fluid-container new-section">
                    <div className="container">

                        <Box sx={{padding: '10px 0 20px 0'}}>
                            <Typography variant="h3">Send A Message</Typography>
                            <Typography>
                                If you have inquiries or would like to know more about my work, 
                                feel free to send me a message below! 
                                <br />
                                I can also be contacted through any of my social media profiles. 
                            </Typography>
                        </Box>

                        <form
                        action="https://formspree.io/mqkyjqwn"
                        method="POST"
                        >
                            <hr />
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField sx={{width: '100%'}} label="Name" variant="outlined" name="name" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField sx={{width: '100%'}} label="Email" variant="outlined" name="_replyto" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField sx={{width: '100%'}} multiline minRows={7} name="message" variant="outlined" label="Message" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" type="submit">Send</Button>
                                </Grid>
                            </Grid>
                            
                        </form>
                    </div>
                </div> 
                <div className="contact-bottom"></div>
            </div>
        );
    }
}
 
export default FlatContact;