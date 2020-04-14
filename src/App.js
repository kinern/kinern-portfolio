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
      <div className="top-color-bar"></div>
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
          <Drawer className="layout-drawer" style={{background: '#FFFFFF'}}>
            <div className="drawer-navigation">
              <Link className="drawer-title" to="/">Natalie Kiner</Link>
              <div className="nav-color-bar" />
              <div className="drawer-links-list">
                <Link to="/about"><i className="fa fa-user"></i><span>About</span></Link>
                <Link to="/projects"><i className="fa fa-laptop"></i><span>Projects</span></Link>
                <Link to="/contact"><i className="fa fa-paper-plane"></i><span>Contact</span></Link>
              </div>
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
