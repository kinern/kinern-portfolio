import React from 'react';
import SocialLinks from '../../SocialLinks';
import {Typography} from '@mui/material';

const SocialMediaBar = () => {
    return(
        <div className="social-media-bar new-section">
            <Typography variant="h1">Get In Touch</Typography>
            <Typography variant="h4">You can reach me on these platforms</Typography>
            <SocialLinks />
        </div>
    );
}

export default SocialMediaBar;