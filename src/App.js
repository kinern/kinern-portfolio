import React from 'react';

import {useLocation} from 'react-router-dom';

import HeaderNav from './components/navigation/HeaderNav';
import Footer from './components/navigation/Footer';
import Router from './components/Router';

const App = () => {

  const location = useLocation();
  const isHome = (location.pathname === "/home" || location.pathname === "/");

  return (
      <div>
        <HeaderNav />
          <Router />
        <Footer />
      </div>
  );
}

export default App;

