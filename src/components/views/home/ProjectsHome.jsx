import React from 'react';
import Projects from '../../Projects';
import {Container, Box, Typography} from '@mui/material';

import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {variant: 'titleText'},
                    style : {
                        color: '#555',
                        display: 'block',
                        fontSize: '2em',
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        margin: 50,
                    },
                },
            ]
        }
    }
});


const ProjectsHome = () => {
    return(
        <ThemeProvider theme={theme}>
            <Box sx={{width:'100%', background:'#0F7173'}}>
                <Box sx={{padding:'30px 0', margin:'auto', color:'white'}}>
                    <Typography variant="titleText" color="white">Case Studies</Typography>
                </Box>
            </Box>
            <Container maxWidth={'md'} sx={{margin:'20vh auto'}}>
                <Projects />
            </Container>
        </ThemeProvider>
    );
};

export default ProjectsHome;