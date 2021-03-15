import React from 'react';

import {Switch, Route, useLocation} from 'react-router-dom';

import HeaderNav from './components/navigation/HeaderNav';
import Footer from './components/navigation/Footer';

import Home from './components/pages/home/Home';
import Projects from './components/pages/projects/Projects';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';

import JTrack from './components/projects/JTrack';
import Portfolio from './components/projects/Portfolio';
import PSPProjects from './components/projects/PSPProjects';

import './css/main.scss';

const App = () => {

  const location = useLocation();
  const isHome = (location.pathname === "/home" || location.pathname === "/");

  return (
    <div>
        <HeaderNav styleClass={ (isHome)? '' : 'dark'}/>
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
            <Projects />
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

