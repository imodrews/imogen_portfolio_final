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
        color: 'white',
        fontSize: '30px',
        textAlign: 'center',
        fontFamily: "'Noto Sans HK', sans-serif;",
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
        marginBottom: "20px",
        marginTop: "20px"
    },

        hero: {
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://tile.loc.gov/storage-services/service/pnp/ppmsca/57400/57452v.jpg')`,
            height: "550px",
            backgroundPosition: "center",
            backgroundColor: 'black',
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
       
            fontFamily:  "'Oswald', sans-serif",
            // textWeight: "bold",
            fontSize: '30px',
            color: "primary",
            letterSpacing: "1px",
            // width: "150px",
            textAlign: "center",    
            // bottomPadding: "150px",
            width: "260px"

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
        <Box>
        <Typography className={classes.name} >Hi, my name is Imogen Drews and I am a Frontend Developer</Typography>
        </Box>
      
        <Box>
                <Avatar
                src={profilePic}
                alt="Imogen's profile"
                className={classes.media}>
                </Avatar>
       </Box>
       <Box>
            {/* <Button className={classes.button}>View my projects</Button> */}
        </Box>
      
    </Box>
</Grid>
</>
)
}

export default Introduction;