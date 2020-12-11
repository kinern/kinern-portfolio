import React from 'react';

import SocialLinks from '../../SocialLinks';

const SocialMediaBar = () => {
    return(
        <div className="social-media-bar new-section">
            <div>
                <h1>Get In Touch</h1>
                <h4>You can find me on these platforms</h4>
            </div>
            <div>
                <SocialLinks />
            </div>
        </div>
    );
}

export default SocialMediaBar;