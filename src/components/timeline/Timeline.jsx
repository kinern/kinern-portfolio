import React from 'react';
import TimelineCard from './TimelineCard';
import {Box} from '@mui/material';

const timelineData = [
    {date:'2021 • PRESENT', title:'Full-Stack Web Developer', 
    body:'Twisted Rope',
    tags:['laravel', 'reactjs', 'nodejs']
},
    {date:'2021', title:'Project', 
    body:'Hackathon Project'
},
    {date:'2021', title:'Full-Stack Web Developer', 
    body:'In Time Tec'
},
    {date:'2020', title:'Project', 
    body:'JTrack Project'
},
    {date:'2016 • 2019', title:'Full-Stack Developer', 
    body:'Pacific Software Publishing'
},
    {date:'2014 • 2016', title:'Assistant Language Teacher', 
    body:'Interac'
},
    {date:'2013', title:'Computer Lab Assistant', 
    body:'Western Washington University'
},
]

const Timeline = () => {
    return (
        <Box sx={{width:'100%'}}>
            <Box sx={{padding:'60px 0', margin:'auto', background:'#0F7173'}}>
                <div style={{textAlign:'center'}}>
                    <h1 style={{color:'white'}}>Timeline</h1>
                </div>
            </Box>
            <Box sx={{width:'80%', margin:'auto'}}>
                <div>
                {timelineData.map((item, index) => {
                    return <TimelineCard date={item.date} title={item.title} body={item.body} index={index} tags={item.tags}/>
                })}
                </div>
            </Box>
        </Box>
    );
};

export default Timeline;