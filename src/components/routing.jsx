import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landing';
import Contact from './contact';
import Projects from './projects';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import About from './about';




const Routing = () => (
    <TransitionGroup className="routing-body">
        <CSSTransition timeout={{ enter: 300, exit: 300 }} classNames={'fade'}>
            < Switch >
                <Route exact path="/" component={ Landing } />
                <Route path="/about" component={ About } />
                <Route path="/projects" component={ Projects } />
                <Route path="/contact" component={ Contact } />
            </ Switch>
        </CSSTransition>
    </TransitionGroup>
)

export default Routing;