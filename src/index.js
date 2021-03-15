import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(
    <ParallaxProvider>
        <MemoryRouter>
            <App />
        </MemoryRouter>
    </ParallaxProvider>
    , document.getElementById('root'));


