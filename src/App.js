import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from './components/SocialLinks';

import HeaderNav from './components/HeaderNav';
import LandingPage from './components/pages/Landing';
import AboutPage from './components/pages/About';
import ProjectsPage from './components/pages/Projects';
import ContactPage from './components/pages/Contact';
import Footer from './components/Footer';

import './css/main.css';

export default class App extends React.Component {

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "js/scroll.js";
    script.async = true;
    document.body.appendChild(script);
  }
  
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
