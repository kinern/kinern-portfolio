import React from 'react';
import {Button, Container, Grid, TextField, Typography} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiButton: {
            variants : [
                {
                    props: {variant: 'submit'},
                    style : {
                        border : '1px solid #BBB',
                        borderRadius: 5,
                        color: '#555',
                        '&:hover': {
                            border: '1px solid #EEE',
                            backgroundColor: '#555',
                            color: '#FFF',
                            borderRadius: 5
                        }
                    },
                }, 
            ],
        },
        MuiTypography: {
            variants: [
                {
                    props: {variant: 'titleText'},
                    style : {
                        color: '#555',
                        fontSize: '2.5em',
                        textAlign: 'center',
                        display: 'block',
                        margin: 20,
                    },
                },
                {
                    props: {variant: 'contactDescriptionText'},
                    style : {
                        color: '#555',
                        fontSize: '1em',
                        textAlign : 'center',
                        display: 'block'
                    },
                },

            ],
        },
    },

});


const FlatContact = () => {

        return ( 
            <ThemeProvider theme={theme}>
                <Container maxWidth={'md'} style={{minHeight: '100vh', marginTop: "20vh", marginBottom: "20vh"}}>
                    <Typography variant="titleText">Send A Message</Typography>
                    <Typography variant="contactDescriptionText">
                        If you have inquiries or would like to know more about my work, 
                        feel free to send me a message below! 
                        <br />
                        I can also be contacted through any of my social media profiles. 
                    </Typography>
                        <div>
                            <hr />
                            <form
                            action="https://formspree.io/mqkyjqwn"
                            method="POST"
                            className="form"
                            >

                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField label={"Name"} fullWidth variant="outlined" type="text" name="name"/>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField label={"Email"} fullWidth variant="outlined" type="text" name="_replyto"/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label={"Write your message here!"} fullWidth multiline name="message" rows="7" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="submit" type="submit" style={{textTransform: 'uppercase'}}>Send</Button>
                                </Grid>
                             </Grid>

                            </form>
                        </div>
                </Container>
            </ThemeProvider>
        );
}
 
export default FlatContact;