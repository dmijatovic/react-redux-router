
import React, { Component } from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { AppHead, AppFooter } from './layout';
//import { HomePage } from './page/home';

import { HomePage } from './router/level1';
import { UserPage } from './user/index';


import './App.scss';
class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div className="app">
          <AppHead />      
          
          <section className="app-body">
            <Switch>     
              <Redirect exact from="/" to="/router"/>         
              <Route path="/router" component={HomePage}/>
              <Route path="/user" component={UserPage}/>                  
            </Switch>
          </section>
          
          <AppFooter />

        </div>

      </BrowserRouter>
    );
  }
}

export default App;
