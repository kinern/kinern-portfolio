import React from 'react';

import Landing from './Landing';
import AboutSmall from './AboutSmall';
import ProjectsHome from './ProjectsHome';
import SocialMediaBar from './SocialMediaBar';
import FlatContact from './FlatContact';

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