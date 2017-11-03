
import React, { Component } from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { AppHead, AppFooter } from './layout/page';
//import { HomePage } from './page/home';

//create router
import { mainMenu } from './data/menu.data';

//import { ErrMsg, Err404Page } from './system/messages';

import './App.scss';
class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div className="app">
          <AppHead />      
          
          <section className="app-body">
            <p>
              This is static part of the page. Main menu and 
              routes are dynamically loaded from ./data/menu.data.js
            </p>            
            <Switch>                   
              <Redirect exact from="/" to={mainMenu.default}/>         
              
              {mainMenu.items.map((prop,i)=>{
                return <Route key={i} {...prop}/>
              })}      
              
            </Switch>
          </section>
          
          <AppFooter />

        </div>

      </BrowserRouter>
    );
  }
}

export default App;
