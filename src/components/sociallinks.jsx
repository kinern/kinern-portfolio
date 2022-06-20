import React from 'react';
import {Link} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {styled} from '@mui/system';

const theme = createTheme({
    components: {
        MuiSocialIcon: {
            styleOverrides: {
                root: {
                    color: '#555',
                    transition: '0.5s all',
                    '&:hover': {
                        color: '#7e7e7e'
                    }
                }
            }
        },
        MuiLink : {
            variants : [
                {
                    props: {variant: 'socialLink'},
                    style: {
                        margin: '0 10px',
                    }
                }
            ], 
        }
    }
});

const SocialIcon = styled("i", {
    name: "MuiSocialIcon",
    overridesResolver: (props, styles) => {
        return [styles.root];
    }
})();


const SocialLinks = () => {
    return ( 
        <ThemeProvider theme={theme}>
            <div>
                <Link variant="socialLink" href="https://www.linkedin.com/in/natalie-kiner/" target="_blank" rel="noopener noreferrer">
                    <SocialIcon className="fa fa-linkedin-square fa-3x" rel="noopener noreferrer"aria-hidden="true" />
                </Link>
                <Link variant="socialLink" href="https://github.com/kinern" target="_blank" rel="noopener noreferrer">
                    <SocialIcon className="fa fa-github-square fa-3x" rel="noopener noreferrer"aria-hidden="true" />
                </Link>
                <Link variant="socialLink" href="https://www.instagram.com/natalie_art7/" target="_blank" rel="noopener noreferrer">
                    <SocialIcon className="fa fa-instagram fa-3x" rel="noopener noreferrer"aria-hidden="true" />
                </Link>
                <Link variant="socialLink" href="https://dribbble.com/natalie_kiner" target="_blank" rel="noopener noreferrer">
                    <SocialIcon className="fa fa-dribbble fa-3x" rel="noopener noreferrer"aria-hidden="true" />
                </Link>
            </div>
        </ThemeProvider>
    );
};

export default SocialLinks;