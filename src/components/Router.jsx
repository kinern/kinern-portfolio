import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './views/home/Home';
import ProjectsPage from './views/projects/ProjectsPage';
import About from './views/about/About';
import Contact from './views/contact/Contact';
import JTrack from './projects/JTrack';
import Portfolio from './projects/Portfolio';
import PSPProjects from './projects/PSPProjects';
import HearingRoom from './projects/HearingRoom';

const Router = () => {

    return(
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/jtrack" element={<JTrack />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/pspprojects" element={<PSPProjects />} />
            <Route path="/hearingroom" element={<HearingRoom />} />
        </Routes>
    );
};

export default Router;