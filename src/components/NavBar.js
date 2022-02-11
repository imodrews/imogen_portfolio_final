import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Drawer from "@material-ui/core/Drawer";
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    ListItemIcon,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core"
import {  Home,  ContactMail } from "@material-ui/icons";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import MenuIcon from '@material-ui/icons/Menu';




import "../App.css";
// import a nice picture for the avatar

// import HomePage from "../pages/HomePage";
// import CV from "../pages/CV";
// import Contact from "./Contact";



const useStyles = makeStyles(theme =>({
    nav:{
        backgroundColor: "#718580",
        height: "65px",
    },
    backButton: {
        backgroundColor: "BE0D73"
    },
    arrow: {
        color: "#FBF3CF"
    },
    menuSliderContainer: {
        width: 250,
        height: "40rem",
        
    },
    avatar: {
        display: "block",
        margin: "0.5rem",
        width: 190,
        height: 230
    },
    lsText: {
        color: "black",
        fontFamily: "font1",
    },
    lsIcon: {
        color: "black",
        
    },
    avatar2: {
        display: "block",
        margin: "0.5rem",
        width: 190,
        height: 230
    },
    words:{
        fontFamily: "'Oswald', sans-serif",
        color: "#FBF3CF"
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <FormatListBulletedIcon />,
        listText: "CV",
        listPath: "/cv"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contact",
        listPath: "/contact"
        
    },
]





const NavBar = () => {
const [slide, setSlide] =useState({
    left: false
});

const toggleSlider = (slider, open) => () => {
    setSlide({...slide, [slider]: open})
}



const classes = useStyles();


const slideList = slider => (
    <Box component="div" className={classes.menuSliderContainer} onClick={toggleSlider(slider, false)}>
            {/* <Avatar className={classes.avatar2} src={newpic} alt="picture of ellesia" variant="rounded"/> */}
            <Divider />
            <List>
            {menuItems.map((lsItem, key)=> (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.lsIcon}>
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.lsText} primary={lsItem.listText}/>
                       
                    </ListItem>
            ))}   
            </List>
        </Box>
)

    return(
    <>
        
        <Box component="nav">
            <AppBar position="relative" className={classes.nav}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("left", true)} className={classes.backButton}>
                        <MenuIcon className={classes.arrow}/>
                    </IconButton>
                    <Typography color="#FBF3CF"  variant="h5" fontFamily="'Oswald', sans-serif" className={classes.words}>
                        Menu
                    </Typography>

                    <Drawer open={slide.left} anchor="right" onClose={toggleSlider("left", false)}>
                        {slideList("left")}
                        {/* <Footer/> */}
                    </Drawer>
                </Toolbar>
            </AppBar>
        </Box>
    </>
    )
};



export default NavBar;