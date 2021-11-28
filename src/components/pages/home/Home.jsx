import React from 'react';

import {Landing, AboutSmall, ProjectsHome, SocialMediaBar, FlatContact} from './index';

const Home = () => {
    return(
        <div className="home">
            <Landing/>
            <AboutSmall />
            <ProjectsHome />
            <SocialMediaBar />
            <FlatContact />
        </div>
    );
}

export default Home;