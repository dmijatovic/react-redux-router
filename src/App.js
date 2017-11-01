
import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { AppHead, AppFooter } from './layout';

import { HomePage } from './page/home';
import { UserPage } from './page/user';

/**
 * <BrowserRouter>

        <div className="app">

          <AppHead />      

          <Route exact path="/" component={HomePage}/>
          <Route path="/home" component={HomePage}/>
          <Route path="/user" component={UserPage}/>        

          <AppFooter />

        </div>

      </BrowserRouter>
 * 
 */

import './App.scss';
class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div className="app">
          <AppHead />      

          <section className="app-body">
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route path="/home" component={HomePage}/>
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
