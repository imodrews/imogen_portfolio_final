import React from 'react';
import { Typography, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import imogen_street from "../images/imogen_street.png";
import room_with_a_view from "../images/room_with_a_view.png";

const useStyles = makeStyles(theme => ({
    imagePosition: {
        display: "flex",
        flexDirection: "row",
        paddingRight: "20%",
        paddingTop: '100px',
        paddingBottom: '100px'
    },
    image: {
        width: "300px",
        margin: "20px",
       
    },
    position: {
        display: "flex",
        flexDirection: "column",
        paddingTop: "20px",
        paddingLeft: "25%",
         paddingRight: "5%",
        
    },
    heading: {
        fontFamily: "'Oswald', sans-serif",
        marginBottom: '10px',
        textDecoration: "none",
        fontSize: "30px",
        color: "white"
    },
    body: {
        fontFamily: "'Oswald', sans-serif",
        textDecoration: "none",
        fontSize: "15px",
        color: "white",
        width: "570px"
    }
}));

const AboutMe = () => {

    const classes = useStyles();

    return(
    <>
    <Box>
        <Box className={classes.imagePosition}>
            <Box className= {classes.position}>
                <Typography className={classes.heading}>About Me</Typography>
                <Typography className={classes.body}>I grew up in Johannesburg, a city in South Africa, and completed my degree in Film and Television in 2017. I then 
                    decided to travel a bit and taught English in Shanghai for 6 months. After that I joined my family, who had just moved to Germany, 
                    in Hamburg and focussed on learning German. One of my friends then introduced 
                    me to the world of coding and I decided to take a full-stack web development course. After completing the course 
                    I decided that frontend development was best suited to me. It appealed to the film editor side of me except, this time, rather than moulding film I would be moulding data. 
                    Check out some of the projects I created in my course below! 
                </Typography>
            </Box>
            <Box>
                <img className={classes.image} src={room_with_a_view} />
            </Box>
            <Box>
                <hr color="primary"/>
            </Box>
        </Box>
    </Box>
    </>
    )
}

export default AboutMe;