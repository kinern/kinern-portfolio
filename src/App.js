import React from 'react';
import './App.css';
import './css/layout.css';
import Routing from './components/routing';
import { Layout, Navigation, Header, Content, Drawer } from 'react-mdl';
import { Link } from 'react-router-dom';
import SocialLinks from './components/sociallinks';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

function App() {
  return (
    <div className="App">
      <Layout>
          <Header className="layout-header" title={
          <span><strong> </strong></span>
          }>
          <Navigation className="topbar-links">
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
          </Header>
          <Drawer className="layout-drawer" style={{background: '#3C6E71'}}>
            <div className="drawer-navigation">
              <Link className="drawer-title" to="/">Natalie Kiner</Link>
              <div className="nav-color-bar" />
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <SocialLinks />
          </Drawer>
          <Content className="content">
            <Routing className="routing-body"/>
          </Content>
      </Layout>
    </div>
  );
}

export default App;
