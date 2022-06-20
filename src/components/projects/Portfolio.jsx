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


class Portfolio extends React.Component {
    render(){
        return(
            <ThemeProvider theme={theme}>
                <Container maxWidth={'md'} style={{minHeight: '80vh', marginTop: 80, marginBottom: 80}}>
                    <Typography variant="title">Portfolio</Typography>
                    <Typography variant="yearText">Year 2020</Typography>
                    <Typography variant="description">
                        This is my portfolio website, created primarily with ReactJS and hosted using GitPages.
                        <br/>
                        The homepage features an overview of myself, my projects, and a contact form.
                        <br />
                        There are also separate pages that go into detail of each piece of my work.
                        <br /><br />
                        This site has gone through several iterations, the newest using MUI v5 styling.
                    </Typography>
                </Container>
            </ThemeProvider>
        );
    }
}

export default Portfolio;