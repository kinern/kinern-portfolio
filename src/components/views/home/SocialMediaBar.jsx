import React from 'react';

import SocialLinks from '../../SocialLinks';
import {Container, Grid, Typography} from '@mui/material';

import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiTypography: {
            variants : [
                {
                    props: {variant: 'titleText'},
                    style : {
                        color: '#555',
                        fontSize: '3em',
                        textAlign: 'center',
                        display:'block',
                    },
                },
                {
                    props: {variant: 'subtitleText'},
                    style : {
                        color: '#555',
                        fontSize: '1.8em',
                        textAlign: 'center',
                        display:'block'
                    },
                },
            ]
        }
    }
});

const SocialMediaBar = () => {
    return(
        <ThemeProvider theme={theme}>
            <Container maxWidth={'md'} style={{minHeight: '80vh', display: 'flex', alignItems: 'center'}}>
                <Grid container>
                        <Grid item xs={12}>
                            <Typography variant="titleText">Get In Touch</Typography>
                            <Typography variant="subtitleText">You can find me on these platforms</Typography>
                        </Grid>
                        <Grid item xs={12} style={{textAlign: 'center', marginTop: 20, marginBottom: 20}}>
                            <SocialLinks />
                        </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}

export default SocialMediaBar;