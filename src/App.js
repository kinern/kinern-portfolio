import React from 'react';

import {Switch, Route, useLocation} from 'react-router-dom';

import {Footer, Header} from './components/navigation';
import {Home, ProjectsPage, About, Contact} from './components/pages';
import {JTrack, Portfolio, PSPProjects} from './components/projects/index';

import './css/main.scss';

const App = () => {

  const location = useLocation();
  const isHome = (location.pathname === "/home" || location.pathname === "/");

  return (
      <div>
        <div className="top-colorline"></div>
        <Header styleClass={ (isHome)? '' : 'dark'}/>
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <ProjectsPage />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/jtrack">
            <JTrack />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/pspprojects">
            <PSPProjects />
          </Route>
        </Switch>
        
        <Footer />
      </div>
  );
}

export default App;

