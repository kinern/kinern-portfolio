import React from 'react';
import {
    Container,
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

const HearingRoom = () => {

    return(
        <ThemeProvider theme={theme}>
            <Container maxWidth={'md'} style={{ marginTop: 80, marginBottom: 80}}>
                <Typography variant="title">Hearing Room</Typography>
                <Typography variant="yearText">Year 2021</Typography>
                <div className="content">
                    <Typography variant="description">
                        More information coming soon! <br />
                        (You can read about it on my <Link target="_blank" href="https://linkedin.com/in/natalie-kiner" rel="noopener noreferrer">linkedin</Link> profile)
                    </Typography>
                </div>
            </Container>
        </ThemeProvider>
    );
}

export default HearingRoom;