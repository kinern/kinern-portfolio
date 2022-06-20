import React from 'react';
import {NavLink} from 'react-router-dom';
import {AppBar, Link, Toolbar} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiToolbar: {
      variants: [
        {
          props: {variant: 'navToolbar'},
          style : {
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            padding: 5,
            backgroundColor: '#555'
          },
        },

      ]
    },
    MuiLink: {
      variants: [
        {
          props: {variant: 'navLink'},
          style : {
              color: '#FFF',
              fontWeight: '600',
              marginRight: 10,
              marginLeft: 10,
              textDecoration: 'none',
              textTransform: 'uppercase',
              '&:hover':{
                color: '#EEE',
                textDecoration: 'none',
              }
          },
        },
      ]
    }
  }
});


const HeaderNav = () => {

    return (
      <ThemeProvider theme={theme}>
        <AppBar>
            <Toolbar variant="navToolbar">
                <Link variant="navLink" component={NavLink} to="/home">About</Link>
                <Link variant="navLink" component={NavLink} to="/projects">Projects</Link>
                <Link variant="navLink" component={NavLink} to="/contact">Contact</Link>
            </Toolbar>
        </AppBar>
      </ThemeProvider>
    );
}

export default HeaderNav;