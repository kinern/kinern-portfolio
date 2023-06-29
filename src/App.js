import React from 'react';

import HeaderNav from './components/navigation/HeaderNav';
import Footer from './components/navigation/Footer';
import Router from './components/Router';

const App = () => {
  
  return (
      <div>
        <HeaderNav />
          <Router />
        <Footer />
      </div>
  );
}

export default App;

