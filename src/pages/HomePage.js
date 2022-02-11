import React from 'react'
import Introduction from '../components/Introduction';
import Projects from '../components/Projects'
import ScrollToTop from '../components/ScrollToTop';



import { Typography, Box, CardMedia, Avatar, Grid, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "#718580",
        width: "100%"
       
    
    },
   
}));

const HomePage = () => {

    
    const classes = useStyles();

    return (
       <>
       <div className={classes.root}>
       <ScrollToTop />
       <Introduction />
      
       <Projects />
    
       </div>
       </>
    )
}

export default HomePage;