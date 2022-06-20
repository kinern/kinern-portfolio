import React from 'react';
import {
    Container,
    Grid,
    Typography,
    Link,
} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {variant: 'title'},
                    style: {
                        color: '#555',
                        fontSize: '2.5em',
                        display: 'block',
                        marginTop: 30,
                    }
                },
                {
                    props: {variant: 'description'},
                    style: {
                        color: '#555',
                        fontSize: '1em'
                    }
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
        }
    }
});

const JTrack = () => {

    return(
        <ThemeProvider theme={theme}>
            <Container maxWidth={'md'} style={{minHeight: '80vh', marginTop: 80, marginBottom: 80}}>
                <Typography variant="title">JTrack</Typography>
                <Typography variant="yearText">Year 2020</Typography>
                <div className="content">
                    <Typography variant="description">
                        <strong>JTrack</strong> is a mobile application for tracking daily workout routines.
                        It includes a monthly calendar with the ability to add in minutes of exercise.
                        There is a statistics page for visually showing the progress being made.
                        Originally, it was created as a way to manage daily jump rope routines, 
                        hence the "J" in the name.
                        <ul style={{listStyleType: 'circle', marginTop: 30}}>
                            <li>Implements Jerry Seinfeld's "Don't Break The Chain" method</li> 
                            <li>Displays local weather using OpenWeatherMap API</li>
                            <li>Generates graph of recorded exercises on Statistics screen</li>
                            <li>Bright layout with colorful icons</li>
                        </ul>
                    </Typography>
                </div>
            </Container>
        </ThemeProvider>
    );
}

export default JTrack;