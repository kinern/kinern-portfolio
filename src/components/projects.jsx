import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/projects.css';
import Footer from './footer';
import ProjectCard from './projectcard';
import Masonry from 'react-masonry-component';

import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


//Used to iterate and generate project cards
//The titles are used as keys with the ProjectData pseudo-table.
const cardsArray = [
    'JTrack',
    'Portfolio', 
    'PSP Pilot', 
    'Helpdesk', 
    "Informakers", 
    "Bloguru",
    'Sakura Rent-A-Car',
    'Buy Green Signs',
    'Illustration Gallery'
];

const cards = cardsArray.map((title) =>
    <ProjectCard 
    projectTitle={title}
    />
);

/*
const filterArray = [
    {'name': 'JS', 'filter': 'js'},
    {'name': 'React', 'filter': 'react'},
    {'name': 'Mobile', 'filter': 'mobile'},
    {'name': 'PHP', 'filter': 'php'},
    {'name': 'SQL', 'filter': 'sql'},
    {'name': 'Other', 'filter': 'other'}
];


const filters = 
    <div className="filters">
        {filterArray.map((filter) =>
        <div className="filter-button" onClick={() => filterTypes(filter.name)}>{filter.name}</div>)}
    </div>;
*/


class Projects extends Component {

    componentDidMount = () => {
        document.getElementsByClassName('content')[0].scrollTop = 0;
    }

    render() { 
        return ( 
        <div className="projects-body">
            <div className="card-intro"><h1>Projects</h1></div>
            <div className="projects-background">
                <div className='cards-container'>
                <Masonry className={'cards'} options={{fitWidth: true}}>
                    {cards}
                </Masonry>
                </div>
                <div className="nextpage-container">
                    <Link className="nextpage-link" to="/contact">Contact Me <span><FontAwesomeIcon icon={faLongArrowAltRight} /></span></Link>
                </div>
            </div>
            <Footer />
        </div> 
        );
    }
}
 
export default Projects;