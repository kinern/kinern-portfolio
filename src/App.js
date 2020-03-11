import React from 'react';
import './App.css';
import './css/layout.css';
import Routing from './components/routing';
import { Layout, Navigation, Header, Content } from 'react-mdl';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Layout fixedHeader>
          <Header className="layout-header" title={
          <span><strong><Link to="/">Natalie Kiner</Link></strong></span>
          }>
          <Navigation className="topbar-links">
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Content className="content">
            <Routing className="routing-body"/>
          </Content>
      </Layout>
    </div>
  );
}

export default App;
