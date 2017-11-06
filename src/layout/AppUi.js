/**
 * Material-ui page header with navigation
 */
import React from 'react';
//import PropTypes from 'prop-types';

//Material UI
import {
  AppBar, Toolbar, Typography, Button, IconButton
} from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';

//router
import { Link, Router } from 'react-router-dom';

//custom styles
import './AppUi.scss';

export const AppHead1 = (props) => {
  //const { classes } = props;
  console.log("AppHead...props:",props);
  
  const sendToLogin=()=>{
    window.location = "/login";
  }
  
  return (
    
    <AppBar position="static">
      <Toolbar>
        <IconButton color="contrast" aria-label="Menu">
          <MenuIcon/>
        </IconButton>
        
        <Typography type="title" color="inherit" className="app-title">
          {props.pageTitle}
        </Typography>
        
        
        <Button color="contrast"
          onClick={sendToLogin}>          
          Login
        </Button>
        
      </Toolbar>
    </AppBar>
    
  )

}
/**
 * App footer receives Material theme and footerText
 * theme is used to style footer in line with theme 
 * @param {theme, footerText} param0 
 */
export const AppFooter = ({theme, footerText}) =>{
  console.log("AppFooter...theme", theme );
  //color = theme.palette.grey[100]

  let color = theme.palette.grey['A100'],
    footerStyles={
      "backgroundColor": color,
      "color": theme.palette.getContrastText(color)
    };
  
  return(
    <section 
      style={footerStyles}
      className="MuiToolbar-gutters-36">
      <h5>{footerText}</h5>
    </section>
  )
}
