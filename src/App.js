
import React, { Component } from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

//import { AppHead, AppFooter } from './layout/page';
//import { HomePage } from './page/home';

//create router
import { mainMenu } from './data/menu.data';

import { Loader } from './system/messages';

import './App.scss';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Loader>
          <Switch>                   
            <Redirect exact from="/" to={mainMenu.default}/>         
            {mainMenu.items.map((prop,i)=>{
              return <Route key={i} {...prop}/>
            })}         
          </Switch>
        </Loader>           
      </BrowserRouter>
    );
  }
}

export default App;
