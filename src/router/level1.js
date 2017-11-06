
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom';

import './level1.scss';

export class HomePage extends Component {

  render() {
    return (
      <BrowserRouter>
        <section>
          <h1>Home page</h1>
          <nav className="tab-nav">
            <span><NavLink to="/router/child1" activeClassName="active">Child 1</NavLink></span>
            <span><NavLink to="/router/child2" activeClassName="active">Child 2</NavLink></span>
            <span><NavLink to="/router/child3" activeClassName="active">Child 3</NavLink></span>
            <span><NavLink to="/router/child4" activeClassName="active">Child 4</NavLink></span>
          </nav>
          <section>
            <p>Home page has it's own child routes with the following functionalities:
              <li>redirect from root to home/child1. It needs Switch statement when only one component need to be rendered</li>
              <li>NavLink enables adding of active class to active link</li>
              <li>Parameter passing to level2 component using /:id. Note! you can pass more values than linked. You need to handle 404 in the code.</li>
              <li>Authentication performed based on random number, user id less than 50 has access to page</li>
            </p>
          </section>
          <section className="tab-content">            
            <Switch>
              <Redirect exact from="/router" to="/router/child1"/>
              <AuthenticateUser>
                <Route path="/router/:id" component = {HomeLevel2} />              
              </AuthenticateUser>
            </Switch>
          </section>
        </section>
      </BrowserRouter>
    );
  }
}

/**
 * This component wraps the routes that need to be 
 * authenticated. In this example we use random 
 * number to determine if user is authenticated 
 * in real life we will use service or jwt eg.
 * The component receives child routes through 
 * props. In this example we have only one
 */
class AuthenticateUser extends React.Component{    
  render(){    
    let { children } = this.props,
        user = Math.round(Math.random()*100);
    
    console.log("AuthenticateUser...", user);
  
    const accessDenied = (      
      <div>
        <h1>Access denied to user {user}</h1>
      </div>
    )   
    //random user >= 50 get accessDenied message
    return ( user < 50 ? children : accessDenied )
  }  
}

const HomeLevel2 = ({match}) => (
  <div>
    <h3>Level 2: {match.params.id}</h3>
  </div>
) 