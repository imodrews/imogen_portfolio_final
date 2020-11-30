import React from "react";

import { AppBar, Toolbar, Button, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
import '../App.css';

import Menu from './Menu';

const font =  "'Yeseva One', cursive";

const useStyles = makeStyles(theme => ({
    appBar: {
        width: '100%',
    },

  menuDisplay: {
      marginLeft: '20px',

  },
    
    name: {
       
        fontFamily: font,
        textWeight: "bold",
        fontSize: '40px',
        color: "primary",
        letterSpacing: "2px",
        width: "150px",
        textAlign: "center",
        marginRight: '70%'
        
    },
    
}));


const NavBar = () => {

const classes = useStyles();

    return(
    
        <AppBar position="static" className={classes.appBar} color="secondary">
            <Toolbar>
            <Container className={classes.menuDisplay}>
                <div>{<Menu />} </div>
                </Container>
                
                
            </Toolbar>
        </AppBar>
    )
}

export default NavBar; 