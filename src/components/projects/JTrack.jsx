import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import calendarImg from '../../images/projects/jtrack/calendar_screen.png';
import graphImg from '../../images/projects/jtrack/graph_screen.png';
import timerImg from '../../images/projects/jtrack/timer_screen.png';
import goalsImg from '../../images/projects/jtrack/goals_screen.png';
import optionsImg from '../../images/projects/jtrack/options_screen.png';


const JTrack = () => {

    const slideImgs = [
        {alt: 'Calendar Screen', img: calendarImg},
        {alt: 'Graph Screen', img: graphImg},
        {alt: 'Timer Screen', img: timerImg},
        {alt: 'Goals Screen', img: goalsImg},
        {alt: 'Options Screen', img: optionsImg}
    ];

    const renderSlides = () => {
        return slideImgs.map((item)=>{
            return (
                <SplideSlide className="jtrack-slide">
                    <img src={item.img} alt={item.alt} />
                </SplideSlide>
            );
        });
    }

    return(
        <div className="jtrack">
            <div>
                <p>
                    <strong>JTrack</strong> is a mobile application for tracking daily workout routines.
                    It includes a monthly calendar with the ability to add in minutes of exercise.
                    There is a statistics page for visually showing the progress being made.
                    Originally, it was created as a way to manage daily jump rope routines, 
                    hence the "J" in the name.
                </p>
                <h5>Features</h5>
                <ul>
                    <li>Implements Jerry Seinfeld's "Don't Break The Chain" method</li> 
                    <li>Displays local weather using OpenWeatherMap API</li>
                    <li>Generates graph of recorded exercises on Statistics screen</li>
                    <li>Bright layout with colorful icons</li>
                </ul>
            </div>
            <div>
                <div className="jtrack-slides">
                    <Splide
                    options={ {
                        rewind : true,
                        perPage: 1,
                        perMove: 1,
                        gap    : '1rem',
                        speed   : 1000,
                        height : 480
                    } }
                    >
                        {renderSlides()}
                    </Splide>
                </div>
            </div>
        </div>
    );
}

export default JTrack;