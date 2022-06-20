import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './views/home/Home';
import ProjectsPage from './views/projects/ProjectsPage';
import About from './views/about/About';
import Contact from './views/contact/Contact';
import JTrack from './projects/JTrack';
import Portfolio from './projects/Portfolio';
import PSPProjects from './projects/PSPProjects';

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
        </Routes>
    );
};

export default Router;