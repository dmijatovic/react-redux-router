/**
 * Material-ui page header with navigation
 */
import React from 'react';
//import PropTypes from 'prop-types';

//Material UI
import {
  AppBar, Toolbar, Typography, Button, IconButton,
  Menu, MenuItem, ListItem
} from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';
import MoreVert from 'material-ui-icons/MoreVert';

//router
import { Link } from 'react-router-dom';
import { mainMenu } from '../data/menu.data';

//custom styles
import './AppUi.scss';

export const AppHead1 = (props) => {
  //const { classes } = props;
  //console.log("AppHead...props:",props);
  
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
  constructor(props){
    super(props)
    
    this.state={
      anchorEl:null,
      open:false,
      item:this.getDefaultMenuItem()
    }
  }

  getDefaultMenuItem(){
    //debugger
    for (let i in mainMenu.items){
      let item = mainMenu.items[i];
      if (item.path === mainMenu.default){
        return parseInt(i);
      }
    }    
    //if we are here there is no default
    //material-ui uses 0 as default to set to 
    //first item
    //debugger
    return 0;
  }

  handleClick = (event) =>{
    //debugger
    this.setState({
      anchorEl: event.currentTarget,
      open:true
    });
  }

  handleRequestClose = (event,index) =>{
    this.setState({
      open:false,
      item:index   
    })
    if (index){
      //console.log("navigate...", mainMenu.items[index].path);
      //window.location=mainMenu.items[index].path;
    }
  }  

  menuItems = () =>{
    
    //it needs to return complete function!        
    //console.log("store", selItem);
    return (
      mainMenu.items
      .filter(i=>i.path!=null)
      .map((i,index)=>{                
        //console.log(i)        
        return(                
          <MenuItem          
            key={index}          
            selected={index===this.state.item}
            onClick={event => this.handleRequestClose(event,index)}>

            <Link key={index} to={i.path}>
              {i.title}
            </Link>

          </MenuItem>                
        )
      })
    )
  }
  render(){
    //console.log(this.state);
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

          {this.menuItems()}

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
