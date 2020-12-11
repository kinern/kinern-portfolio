import React from 'react';

import jTrackImg from '../../images/projects/ryan-de-hamer-pCT8ag1o3nU-unsplash.jpg';
import screenshots from '../../images/projects/ryan-de-hamer-pCT8ag1o3nU-unsplash.jpg';


class JTrack extends React.Component {
    render(){
        return(
            <div>
                <h2>JTrack</h2>
                <hr />
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
            </div>
        );
    }
}

export default JTrack;