import React from "react";
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography, Button, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import '../App.css';




const useStyles = makeStyles(theme => ({

    textField: {
        color: "#000000",
        fontFamily: "'Oswald', sans-serif"
    },
  
  
    heading: {
        fontFamily: "'Oswald', sans-serif",
        marginBottom: '10px',
        textDecoration: "none",
        fontSize: "35px",
        color: "black",
        textAlign: 'center'
    },
    body: {
        fontFamily: "'Oswald', sans-serif",
        textDecoration: "none",
        fontSize: "17px",
        color: "black",
        width: "570px",
        textAlign: 'center'
    },
    center: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }
  
  
}));





const Contact = () => {

    const classes = useStyles();
    
    
        return(
            

               <Box component="div" style={{background:"white", height:"90vh"}} >

                 <div className={classes.center}>
                    <Typography className={classes.heading}>About Me</Typography>
                <Typography className={classes.body}>I grew up in Johannesburg, a city in South Africa, and completed my degree in Film and Television in 2017. I then 
                    decided to travel a bit and taught English in Shanghai for 6 months. After that I joined my family, who had just moved to Germany, 
                    in Hamburg and focussed on learning German. One of my friends then introduced 
                    me to the world of coding and I decided to take a full-stack web development course. After completing the course, I decided to become a frontend developer.
                    After working in this field for the past year, I realised that my interests really lie in UX/UI design. I enjoy both the creative and collaborative nature 
                    of the field. 
                  
                </Typography>
                
                </div>
               
              
               </Box>
            
        )
    };

export default Contact;
    
    