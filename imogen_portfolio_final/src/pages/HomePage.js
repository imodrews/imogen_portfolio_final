import React from 'react'
import Introduction from '../components/Introduction';
import Projects from '../components/Projects'
import ScrollToTop from '../components/ScrollToTop';
import AboutMe from '../components/AboutMe';


import { Typography, Box, CardMedia, Avatar, Grid, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "#000000",
       
    
    },
   
}));

const HomePage = () => {

    
    const classes = useStyles();

    return (
       <>
       <div className={classes.root}>
       <ScrollToTop />
       <Introduction />
       <AboutMe />
       <Projects />
       </div>
       </>
    )
}

export default HomePage;