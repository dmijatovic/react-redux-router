/**
 * Material-ui page header with navigation
 */
import React from 'react';
//import PropTypes from 'prop-types';

//Material UI
import {
  AppBar, Toolbar, Typography, Button, IconButton,
  Menu, MenuItem
} from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';
import MoreVert from 'material-ui-icons/MoreVert';

//router
import { NavLink } from 'react-router-dom';
import { mainMenu } from '../data/menu.data';

//custom styles
import './AppUi.scss';

export const AppHead1 = (props) => {
  //const { classes } = props;
  console.log("AppHead...props:",props);
  
  const sendToLogin=()=>{
    window.location = mainMenu.loginUrl;
  }
  
  return (
    
    <AppBar position="static">
      <Toolbar>
        <IconButton color="contrast" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        
        <Typography type="title" color="inherit" className="app-title">
          {props.pageTitle}
        </Typography>
        
        
        
        <Button color="contrast"
          onClick={sendToLogin}>          
          Login
        </Button>
        
        <IconMainMenu />

      </Toolbar>
    </AppBar>
    
  )
}


export class IconMainMenu extends React.Component{
  state={
    anchorEl:null,
    open:false
  }

  handleClick = (event) =>{
    //debugger
    this.setState({
      anchorEl: event.currentTarget,
      open:true
    });
  }

  handleRequestClose = () =>{
    this.setState({open:false})
  }

  menuItems=()=>{
    //console.log(mainMenu)
    mainMenu.items
      .filter(i=>i.path!=null)
      .map((item,index)=>{
        console.log(item.path, item.title);
        return(          
          <MenuItem
            //key={item.path}
            //selected={item.path === this.state.selected } 
            onClick={this.handleRequestClose}>
            {item.title}
          </MenuItem>
        )
    })
  }
  render(){
    //const open = Boolean (this.state.anchorEl);
    //const menuItems = () => {
     
    //}
    return(
      <div>
        <IconButton
          aria-label="More"
          aria-haspopup="true"
          color="contrast"
          onClick={this.handleClick}>
          <MoreVert/>
        </IconButton>
        <Menu
          id="app-main-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}>

          {mainMenu.items
            .filter(i=>i.path!=null)
            .map((i,index)=>{
              console.log(i.path);
              return(
                <MenuItem
                  key={index} 
                  onClick={this.handleRequestClose}>
                  
                  <NavLink to={i.path} >{i.title} </NavLink>

                </MenuItem>
              )
            })
          }
        </Menu>
      </div>
    )
  }
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
