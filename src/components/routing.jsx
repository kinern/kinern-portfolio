import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from './landing';
import Contact from './contact';
import Projects from './projects';
import About from './about';

import { CSSTransition, TransitionGroup } from 'react-transition-group';




const Routing = () => (
    <Route render={({ location }) => (
        <div>
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                timeout={200}
                classNames='fade'
            >
                < Switch >
                    <Route exact path="/" component={ Landing } />
                    <Route path="/about" component={ About } />
                    <Route path="/projects" component={ Projects } />
                    <Route path="/contact" component={ Contact } />
                </ Switch>
            </CSSTransition>
        </TransitionGroup>
        </div>
        )}/>
);

export default Routing;