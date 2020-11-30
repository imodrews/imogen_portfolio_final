import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { BottomNavigation, BottomNavigationAction, Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        background: `#000000`
    },
    navColor: {
        background: `#24705b`
    }
}));

const Footer = () => {

    const classes = useStyles();
    const [value, setValue] = useState('recents');
    
    const handleChange = (event, newValue) =>{
        setValue(newValue);
    };
    
    return(
<>
    <BottomNavigation value={value} onChange={handleChange} className={classes.root} >   
    <Link href="https://www.linkedin.com/in/imogen-drews-28b150199/" >
      <BottomNavigationAction label="search: Imogen Drews" value="LinkedIn" icon={<LinkedInIcon color="primary"/> } />
      </Link>
    <Link href="https://github.com/imodrews" >
      <BottomNavigationAction label="username: imodrews" value="github" icon={<GitHubIcon color="primary"/>} />
    </Link>
    </BottomNavigation>
</>

    )}

export default Footer;