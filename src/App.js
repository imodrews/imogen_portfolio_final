import React from "react";
import './App.css';
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Cv from "./pages/CV";

import Contact from "./components/Contact";
import HomePage from './pages/HomePage';
import ScrollToTop from './components/ScrollToTop';
import { CssBaseline } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme)=>({
  root: {
    minHeight: '100vh',
    // backgroundImage: 'https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}))

const App = () => {

  const classes = useStyles();
  
  return (
    <div className={classes.root}>
    <CssBaseline>
      <ScrollToTop />
      <header>
        <NavBar />
      </header>
      <main>
      <Switch>
        <Route
          path="/cv">
           <Cv />
        </Route>
        
        <Route
          path="/contact">
           <Contact />     
          </Route> 
        <Route
        exact
        path="/">
          <HomePage />
        </Route>
      </Switch>
      </main>
      
      <footer>
        <Footer />

      </footer>
      </CssBaseline>
    </div>
  );
}

export default App;

