import React from 'react';

import {
    Container,
    Grid,
    Typography,
} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {styled} from '@mui/system';

import backgroundImg from '../../../images/seattle-scott-horn-unsplash-2.jpg';


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
            <Container maxWidth={false} style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                minHeight: '100vh', 
                display: 'flex', 
                alignItems: 'center'
                }} id="top">
                    <Grid container justifyContent="center" alignItems="center" style={{minHeight: '100vh'}}>
                        <Grid item xs={12} alignSelf="center" justifySelf="center">
                            <Div style={{backgroundColor:'rgba(255,255,255,0.25)', margin:'0', padding:'10px'}}>
                                <Typography sx={{fontSize:{xs: "1.4em", md: "1.8em", lg: "2em"}}} variant="titleText">Natalie Kiner</Typography>
                                <Typography sx={{fontSize:{xs: "1em", md: "1.4em", lg: "1.8em"}}} variant="subtitleText">Software Engineer & Illustrator</Typography>
                            </Div>
                        </Grid>
                    </Grid>      
            </Container>
            </ThemeProvider>
    );
}
 
export default Landing;