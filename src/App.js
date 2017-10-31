
import React, { Component } from 'react';

//import { BrowserRouter, Route } from 'react-router-dom';

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

export default App;
