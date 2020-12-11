import React from 'react';

import {Switch, Route} from 'react-router-dom';

import HeaderNav from './components/navigation/HeaderNav';
import Footer from './components/navigation/Footer';

import Home from './components/pages/home/Home';
import Projects from './components/pages/projects/Projects';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';

import ProjectPage from './components/projects/ProjectPage';
import JTrack from './components/projects/JTrack';
import Portfolio from './components/projects/Portfolio';
import PSPProjects from './components/projects/PSPProjects';

import './css/main.scss';

export default class App extends React.Component {
  
  render (){
    return (
      <div>
        <HeaderNav />
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
            <ProjectPage title={'JTrack'}><JTrack /></ProjectPage>
          </Route>
          <Route path="/portfolio">
            <ProjectPage title={'Portfolio'}><Portfolio /></ProjectPage>
          </Route>
          <Route path="/pspprojects">
            <ProjectPage title={'PSP Projects'}><PSPProjects /></ProjectPage>
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
};
