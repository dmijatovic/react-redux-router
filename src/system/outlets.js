import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { mainOutlet } from '../cfg/menu.data';

import {AppHeader, PublicHeader } from './headers';

export const PublicOutlet = () => (
  <section className="main-outlet">
    <PublicHeader />
    <h1>Public main outlet</h1>
  </section>
)

export const AppOutlet = () => (
  <section className="main-outlet">
    <AppHeader />
    <h1>App main outlet</h1>
  </section>
)

export const SystemOutlet = () => (
  <section className="main-outlet">
    <h1>System main outlet</h1>
  </section>
)

export const UserOutlet = () => (
  <section className="main-outlet">
    <h1>User main outlet</h1>
  </section>
)


export class MainOutlet extends React.Component{
  getItems(){
    mainOutlet.menuItems
    .map((item,i)=>{
      return(<Route key={i} exact path={item.path} component={item.component} />)
    })
  }
  render(){
    return(
      <BrowserRouter>
        <Switch>
          {/*<section className="main-outlet">
            <h1>Main outlet page</h1>
          </section>*/}
          <Route path="/app" component={AppOutlet} />
          <Route path="/user" component={UserOutlet} />
          <Route exact path="/" component={PublicOutlet} />
        </Switch>
      </BrowserRouter>
    )
  }
}
