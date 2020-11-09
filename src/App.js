import React, { Suspense } from 'react';

import HeaderNav from './components/HeaderNav';
import LandingPage from './components/pages/Landing';

import AboutPage from './components/pages/About';
import ProjectsPage from './components/pages/Projects';
import ContactPage from './components/pages/Contact';
import Footer from './components/Footer';

import './css/main.scss';

/*
const AboutPage = React.lazy(()=>import('./components/pages/About'));
const ProjectsPage = React.lazy(()=>import('./components/pages/Projects'));
const ContactPage = React.lazy(()=>import('./components/pages/Contact'));
const Footer = React.lazy(()=>import('./components/Footer'));
*/

export default class App extends React.Component {
  
  render (){
    return (
      <div>
        <HeaderNav />
        <LandingPage />
        <Suspense fallback={<div>Loading...</div>}>
          <AboutPage />
          <ProjectsPage />
          <ContactPage />
          <Footer />
        </Suspense>
      </div>
    );
  }
};
