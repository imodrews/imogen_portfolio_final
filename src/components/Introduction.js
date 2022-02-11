import React, { useState } from "react";

import Projects from "./Projects";





import { Typography, Box, CardMedia, Avatar, Grid, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from "@material-ui/core";



import profilePic from '../images/copyprofile.jpg';
import '../App.css';


const useStyles = makeStyles(theme => ({

introBox: {
    display: 'flex',
    alignContent: 'flex-start'

},

    introduction: {
        color: '#FBF3CF',
        display: 'flex',
        fontSize: '100px',
        textAlign: 'center',
        fontFamily: "'Abril Fatface', cursive",
        paddingTop: '200px',
        paddingBottom: '50px'
  
        
    },

    mediaBox: {
        display: 'flex',
        justifyContent: 'center',
        

    },

    media: {
        
        
        width: '200px',
        height: '200px',
        marginBottom: "20px",
        marginTop: "20px"
    },

        hero: {
            // backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://tile.loc.gov/storage-services/service/pnp/ppmsca/57400/57452v.jpg')`,
            height: "550px",
            backgroundPosition: "center",
            backgroundColor: "#718580",
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
            textAlign: 'center',
            fontFamily:  "'Oswald', sans-serif",
            // textWeight: "bold",
            fontSize: '35px',
            color: "black",
            letterSpacing: "1px",
            // width: "150px",
            textAlign: "center",    
            paddingBottom: "50px",
            width: "600px"

        },
        button: {
            bottomMargin: "100px",
            color: "white",
            fontFamily:  "'Oswald', sans-serif",
        },
        projects: {
            padding: "50",
        }

    }));


const Introduction = () => {
    const [isShown, setIsShown] = useState(false);

const classes = useStyles();
  
return(
<>
<Grid>
   
     
    <Box className={classes.hero}>
 

    <Box className={classes.introduction}>Imogen Drews</Box>
        <Box>
        <Typography className={classes.name} >UX/UI designer with a background in Frontend Development and Film</Typography>
        </Box>
        <img src={profilePic} width='400px' height='400px'  />
 
       <Box>
            {/* <Button className={classes.button}>View my projects</Button> */}
        </Box>
     
      
    </Box>
</Grid>
</>
)
}

export default Introduction;