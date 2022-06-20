import React from 'react';
import FlatContact from '../home/FlatContact';
import {Container} from '@mui/material';


const Contact = () => {
    return (  
        <Container maxWidth={'md'} style={{minHeight: '80vh', marginTop: 80, marginBottom: 80}}>
            <FlatContact />
        </Container>
    );
}
 
export default Contact;