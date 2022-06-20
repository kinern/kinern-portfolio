import React from 'react';

import { mdiArrowDown } from '@mdi/js';
import Icon from '@mdi/react';

import {
    Container,
    Grid,
    Typography,
    Link,
} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {styled} from '@mui/system';


const theme = createTheme({
    components: {
        MuiDiv : {
            styleOverrides: {
                root: {
                    color: '#555'
                }
            }
        },
        MuiLink: {
            variants: [
                {
                    props: {variant: 'unstyled'},
                    style : {
                        textDecoration: 'none',
                        '&:hover' : {
                            textDecoration: 'none',
                        },
                        '&:visited': {
                            textDecoration: 'none',
                        }
                    }
                }
            ]
        },
        MuiTypography: {
            variants : [
                {
                    props: {variant: 'welcomeText'},
                    style : {
                        color: '#555',
                        fontWeight: '600',
                    },
                },
                {
                    props: {variant: 'titleText'},
                    style : {
                        color: '#555',
                        display: 'block',
                        fontSize: '4em',
                        textAlign: 'center',
                        textTransform: 'uppercase',
                    }, 
                },
                {
                    props: {variant: 'subtitleText'},
                    style : {
                        color: '#555',
                        display: 'block',
                        fontSize: '1.6em',
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                    },
                },
            ],
        },
    },
});

const Div = styled("div", {
    name: "MuiDiv",
    overridesResolver: (props, styles) => {
        return [styles.root];
    }
})();


const Landing = (props) => {

        return (  
            <ThemeProvider theme={theme}>
            <Container maxWidth={false} style={{minHeight: '100vh', display: 'flex', alignItems: 'center'}} id="top">
                    <Grid container justifyContent="center" alignItems="center" style={{minHeight: '100vh'}}>
                        <Grid item xs={12} alignSelf="center" justifySelf="center">
                            <Typography variant="titleText">Natalie Kiner</Typography>
                            <Typography variant="subtitleText">Software Engineer & Illustrator</Typography>
                        </Grid>
                    </Grid>      
            </Container>
            </ThemeProvider>
    );
}
 
export default Landing;