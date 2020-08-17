import React from 'react';

import HeaderNav from './components/HeaderNav';
import LandingPage from './components/pages/Landing';
import AboutPage from './components/pages/About';
import ProjectsPage from './components/pages/Projects';
import ContactPage from './components/pages/Contact';
import Footer from './components/Footer';

import './css/main.css';

export default class App extends React.Component {
  
  render (){
    return (
      <div>
        <HeaderNav />
        <LandingPage />
        <AboutPage />
        <ProjectsPage />
        <ContactPage />
        <Footer />
      </div>
    );
  }
};
