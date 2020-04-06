import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landing';
import Contact from './contact';
import Projects from './projects';
import About from './about';




const Routing = () => (
    <div>
        < Switch >
            <Route exact path="/" component={ Landing } />
            <Route path="/about" component={ About } />
            <Route path="/projects" component={ Projects } />
            <Route path="/contact" component={ Contact } />
        </ Switch>
    </div>
)

export default Routing;