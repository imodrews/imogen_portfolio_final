import React from "react";
import { Typography, Box, CardMedia, Avatar, Grid, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import image from "../images/pokeHomepage.png";
import gouda_father from "../images/the-gouda-father.png";
import '../App.css';


const useStyles = makeStyles(theme => ({

 
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
                color: "white",
                textAlign: 'center',
                paddingBottom: '30px'
            },
            stackPosition: {
                position: "relative"
    
            },
            portfolioPosition: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                paddingBottom: '50px'
                
            },
            pokeImage: {
                padding: "10px"
    
            },
            goudaFatherImage: {
                padding: "10px"
            }
        }));

const Projects = () => {

    
const classes = useStyles();

return(
<Box>
       <Box>
          <Typography className={classes.projectText}>My Projects</Typography>
      </Box>
<Box className={classes.portfolioPosition}>
      <Box className={classes.pokeImage}>
    <a href="https://pokemonwbs.netlify.app/">
      <img
        src={image}
        width="300px"
      />
    </a>
      </Box>
    <Box className={classes.goudaFatherImage}>
    <a href="https://the-gouda-father.netlify.app/">
      <img
        src={gouda_father}
        width="300px"
        
      />
    </a>
      </Box>
</Box>
    </Box>
    )
}

export default Projects;