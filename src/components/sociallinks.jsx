import React from 'react';
import {Grid} from '@mui/material';

const socialData = [
    {
        iconClasses: "fa fa-linkedin-square fa-3x",
        href: "https://www.linkedin.com/in/natalie-kiner/"
    },
    {
        iconClasses: "fa fa-github-square fa-3x",
        href: "https://github.com/kinern"
    },
    {
        iconClasses: "fa fa-instagram fa-3x",
        href: "https://www.instagram.com/natalie_art7/"
    },
    {
        iconClasses: "fa fa-dribbble fa-3x",
        href: "https://dribbble.com/natalie_kiner"
    },
];

const renderIcons = () => {
    return (
        <Grid 
        container 
        spacing={3}
        alignItems="center"
        justifyContent="center"
        >
        { socialData.map((item)=>{
            return (
                <Grid item>
                    <a className="btn" href={item.href} target="_blank" rel="noopener noreferrer">
                        <i className={item.iconClasses} rel="noopener noreferrer"aria-hidden="true" />
                    </a>
                </Grid>
            );
        }) }
        </Grid>
    );
}

const SocialLinks = () => {
    return ( 
        <div className="social-links">
            {renderIcons()}
        </div>
    );
};

export default SocialLinks;