import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(theme => ({
    menu: {
        fontFamily: "'Roboto', sans-serif",
        textDecoration: "none",
        color: "black"
    },
}));

const MyMenu = () => {

    const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color="primary">
      {<MenuIcon />}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
       <NavLink to="/">
        <MenuItem onClick={handleClose} className={classes.menu} style={{ textDecoration: 'none' }} >Home</MenuItem>
        </NavLink>
        <NavLink to="/cv">
        <MenuItem onClick={handleClose} className={classes.menu} style={{textDecoration: 'none'}}>CV</MenuItem>
        </NavLink>
        <NavLink to="/contact">
        <MenuItem onClick={handleClose} className={classes.menu} style={{textDecoration: 'none'}}>Contact Me</MenuItem>
        </NavLink>
      </Menu>
    </div>
  );
}

export default MyMenu;