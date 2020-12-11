import React from 'react';


const Skills = () =>{


    const skills = [
        {
            title: 'PHP | CakePHP', 
            description: 'I have three years of work experience creating backend systems using both the CakePHP framework and pure PHP.', 
            icon: null
        },
        {
            title: 'MySQL | SQLite | MariaDB',
            description: 'I have designed and maintained a variety of databases. I am the go to person for getting information.',
            icon: null
        },
        {
            title: 'NodeJS|MongoDB',
            description: 'I am proficient at building sites using the MERN stack, and have taken online courses to improve my skill.',
            icon: null
        },
        {
            title: 'JavaScript | JQuery',
            description: 'I am good at making interactive websites using JS and JQuery.',
            icon: null
        },
        {
            title: 'HTML5 | CSS3 | SASS | Bootstrap',
            description: 'Gotta know the essentials.',
            icon: null
        },
        {
            title: 'ReactJS | React Native',
            description: 'A newer skill to add to my collection, I love React Native and how easy it is to make mobile apps with.',
            icon: null
        },
        {
            title: 'Trac',
            description: 'An alternative tool to JIRA, I am well aquainted with using the Trac wiki and ticketing system.',
            icon: null
        },
        {
            title: 'Git | SVN',
            description: 'Source control tools',
            icon: null
        },
        {
            title: 'Leadership | Communication',
            description: 'Softskills ahoy',
            icon: null
        },
        {
            title: 'Pixel Artwork',
            description: '',
            icon: null
        },
        {
            title: 'Pen Illustrations',
            description: '',
            icon: null
        },
        {
            title: 'Watercolor',
            description: '',
            icon: null
        }


    ];

    const renderCards = (icon, title, description) =>{

        const skillcards = skills.map((item)=>{
            return (
                <div className="skill-card">
                    <div>
                        <h3>{item.title}</h3>
                    </div>
                    <div>
                        <p>{item.description}</p>
                    </div>
                </div>
            );
        });

        return skillcards;
    }

    return(
        <div className="fluid-container skills">
            <div>
                {renderCards()}
            </div>
        </div>
    );
};

export default Skills;