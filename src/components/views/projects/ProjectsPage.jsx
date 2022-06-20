import React, { Component } from 'react';
import Projects from '../../Projects';
import {Container, Typography} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {variant: 'titleText'},
                    style : {
                        fontSize: '2.5em',
                        color: '#555',
                        textAlign: 'center',
                        display: 'block',
                        margin: 50, 
                    }
                }
            ]
        }
        
    }
});

class ProjectsPage extends Component {

    render() { 
        return ( 
            <ThemeProvider theme={theme}>
                <Container maxWidth={'md'} style={{marginTop: 80, marginBottom: 80}}>
                    <Typography variant="titleText">Case Studies</Typography>
                    <Projects/>
                </Container>
            </ThemeProvider>
        );
    }
}
 
export default ProjectsPage;