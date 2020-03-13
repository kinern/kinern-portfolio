import React from 'react';
import './App.css';
import './css/layout.css';
import Routing from './components/routing';
import { Layout, Navigation, Header, Content, Drawer } from 'react-mdl';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Layout>
          <Header className="layout-header" title={
          <span><strong><Link to="/">Natalie Kiner</Link></strong></span>
          }>
          <Navigation className="topbar-links">
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
          </Header>
          <Drawer className="layout-drawer" title={
          <Link to="/">Natalie Kiner</Link>
          } 
          style={{background: '#000', color:'#fff'}}>
            <Navigation>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content className="content">
            <Routing className="routing-body"/>
          </Content>
      </Layout>
    </div>
  );
}

export default App;
