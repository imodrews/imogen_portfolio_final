import React, { useState } from "react";

import '../App.css';
import image from "../images/pokeHomepage.png";


import { Typography, Box, CardMedia, Avatar, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import profilePic from '../images/copyprofile.jpg';
import '../App.css';


const useStyles = makeStyles(theme => ({

introBox: {
    display: 'flex',
    alignContent: 'flex-start'

},

    introduction: {
        color: 'white',
        fontSize: '30px',
        textAlign: 'center',
        fontFamily: "'Oswald', sans-serif",
        width: "500px",
        marginBottom: "20px"
        
    },

    mediaBox: {
        display: 'flex',
        justifyContent: 'center',
        

    },

    media: {
        
        
        width: '200px',
        height: '200px',
        marginBottom: "50px"
    },

        hero: {
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1422360902398-0a91ff2c1a1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1316&q=80')`,
            height: "800px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "2rem",
            bottomPadding: "20px"
            
        },
        name: {
       
            fontFamily:  "'Yeseva One', cursive",
            textWeight: "bold",
            fontSize: '40px',
            color: "primary",
            letterSpacing: "2px",
            // width: "150px",
            textAlign: "center",    
            bottomPadding: "20px"

        },
        portfolio: {
            bottomPadding: "10px"
            
        },
        positionHover: {
            
            // position: "relative",
            // bottom: "20px",
            // right: "20px",
            //  backgroundColor: "black",
            //  color: "white",
            //  paddingLeft: "30px",
            // paddingRight: "200px",
            // opacity: "50%",
          
            // bottomPadding: "100px",
            fontSize: "20px",
            fontFamily: "'Oswald', sans-serif",
        },
        projectText: {
            fontFamily: "'Oswald', sans-serif",
            fontSize: "30px",
            margin: "10px",
            textAlign: 'center'
        },
        stackPosition: {
            position: "relative"

        }





    }));


const Introduction = () => {
    const [isShown, setIsShown] = useState(false);




const classes = useStyles();
  
return(
<>
<Grid >
     
    <Box className={classes.hero}>
        <Box>
        <Typography className={classes.name}>Imogen Drews</Typography>
        </Box>
        <Box>
        <Typography className={classes.introduction} color="primary"> Aspiring Junior Web Developer with a love for design </Typography>
        </Box>
        <Box>
                <Avatar
                src={profilePic}
                alt="Imogen's profile"
                className={classes.media}>
                </Avatar>
       </Box>
    <Box>
       <Box>
          <Typography className={classes.projectText}>My Projects</Typography>
      </Box>
      <Box>
    <a href="https://pokemonwbs.netlify.app/">
      <img
        src={image}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        width="300px"
        
      />
    </a>
      </Box>
      <Box className={classes.stackPosition}>
      {isShown && <div className={classes.positionHover}>
      Stack:
      <br />
      React 
      <br />
      Material UI
      <br />
      JavaScript
      </div>}
    </Box>
</Box>
    </Box>
    





</Grid>





</>
)
}

export default Introduction;