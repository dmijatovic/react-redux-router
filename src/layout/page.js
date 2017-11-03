import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';

import './layout.scss';

import { mainMenu } from '../data/menu.data';


export class AppHead extends Component {     
  componentWillMount(){
    console.log("AppHead componentWillMount");
    //debugger
    this.setState({      
      welcome:"This is default welcome"
    })
  }
  homeClick(){
    //debugger
    console.log("You clicked on home");
  }
  render() {
    return (
      <header className="app-header mat-elevation-z7">
        <div className="left-side">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">{this.state.welcome}</h1>
        </div>
        
        <div className="main-nav-group">
          
          {mainMenu.items
            .filter(i => i.path!=null)
            .map(item =>(
            <NavLink key={item.path} to={item.path}
              activeClassName={item.activeClass} >
              <i className="material-icons btn"
                title={item.title}>{item.matIcon}
              </i>
            </NavLink>
          ))}            
            
        </div>
      </header>      
    );
  }
}

export class AppFooter extends Component {
  constructor(){
    super();
    console.log("footer constructor");
    //this.welcome = "this is welkom";     
  }
  componentWillMount(){
    console.log("footer componentWillMount");
    this.setState({
      appFooterText:"Test is footer text"
    })
  }
  render() {
    return (
      <footer className="app-footer">  
        <div>{this.state.appFooterText}</div>
      </footer>      
    );
  }
}


export class AppPage extends Component {

  render() {
    return (
      <div className="app">
        <AppHead /> 
        <section className="app-body">
          <p className="app-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </section>
        <AppFooter />
      </div>
    );
  }
}
