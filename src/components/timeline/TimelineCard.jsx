import React from 'react';
import {Box, Card, CardContent, Typography} from '@mui/material';

const cardTopBoxStyles = {
    position:'relative',
    display:'flex', 
    justifyContent:'space-between', 
    margin:'10px 0px'
};

const borderStyles = {
    position:'relative',
    padding:'30px',
    maxWidth:'800px',
    margin:'auto',
    
    marginBottom:'-3px',
    '&:last-child:nth-child(odd)::before': {
        borderBottom: '0',
        borderBottomLeftRadius: '0'
    },

    '&:first-child:nth-child(odd)::before': {
        borderTop: '0',
        borderTopLeftRadius: '0',
        borderTopRightRadius: '0'
    },

    '&::before':{
        content: '""',
        position: 'absolute',
        width: '50%', //this
        border: '3px solid #0F7173',
    },

    '&:nth-child(odd)':{
        padding: '30px 0 30px 30px',
        '&::before':{
            left: '0',
            top: '0',
            bottom: '0',
            borderRadius:'20px 0px 0px 20px',
            borderWidth: '3px 0 3px 3px',
        },

    },
    '&:nth-child(even)':{
        padding: '30px 30px 30px 0',
        '&::before':{
            right: '0',
            top: '-0px',
            bottom: '-0px',
            borderRadius:'0px 20px 20px 0px',
            borderWidth: '3px 3px 3px 0',
        }

    },
    '&:hover': {
        '>.dot':{
            '&::before': {
                background: 'white',
            }
        }
    }
    
};

const dotStyles = {
    position:'relative',
    '&.right':{
        '&::before': {
            right:'-43px'
        },
    },
    '&.left':{
        '&::before': {
            left:'-43px'
        },
    },
    '&::before': {
        content: "''",
        position: 'absolute',
        width: '30px',
        height: '30px',
        background: '#0F7173',
        borderRadius: '999px',
        border: '3px solid #0F7173',
        top:'25px',
        zIndex:'999',
        transition: '0.5s all'
      },
    '&:hover': {
        '&::before': {
            background: 'white',
        }
    }

}

const renderTags = (tags) => 
<Box sx={{display:'flex'}}>
    {tags.map((tag)=>{
            return <Box sx={{marginRight:'5px', padding:'2px 5px', fontSize: '11px', borderRadius:'2px', background:'lightgray'}}>{tag}</Box>
    })}
</Box>

const TimelineCard = ({date, title, body, index, tags}) => {
    return (
        <Box sx={borderStyles}>
            <Box className={(index % 2 === 0)? 'dot left': 'dot right'} sx={dotStyles}></Box>
            <Card sx={{minHeight:'180px', minWidth:'250px', border:'1px solid lightgray', margin:'0 20px', borderRadius:'20px'}}>
                <CardContent>
                <Box style={cardTopBoxStyles}>
                    <Typography variant={'subtitle2'}>{date}</Typography>
                    <Typography variant={'body1'}>{title}</Typography>
                </Box>
                <Typography variant={'body2'}>{body}</Typography>
                {(tags)? renderTags(tags) : null }
                </CardContent>
            </Card>
        </Box>
    );
};

export default TimelineCard;