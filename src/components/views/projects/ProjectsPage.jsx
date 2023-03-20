import React, { Component } from 'react';
import Projects from '../../Projects';
import {Box, Container, Typography} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {variant: 'titleText'},
                    style : {
                        fontSize: '2.5em',
                        color: '#fff',
                        textAlign: 'center',
                        display: 'block',
                        textTransform: 'uppercase'
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
                <Box sx={{backgroundColor: '#0F7173', padding:'120px 0 80px 0'}}>
                    <Typography variant="titleText">Case Studies</Typography>
                </Box>
                <Container maxWidth={'md'} style={{marginTop: 80, marginBottom: 80}}>
                    <Projects/>
                </Container>
            </ThemeProvider>
        );
    }
}
 
export default ProjectsPage;