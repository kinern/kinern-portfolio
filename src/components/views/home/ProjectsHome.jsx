import React from 'react';
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
            <Container maxWidth={'md'}>
                <Typography variant="titleText">Case Studies</Typography>
                <Projects />
            </Container>
        </ThemeProvider>
    );
};

export default ProjectsHome;