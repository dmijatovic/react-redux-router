
//import React, { Component } from 'react';

//standard pages
import { HomePage } from '../router/level1';

import { UserPage } from '../user/page';
import { LoginForm, RegisterForm } from '../user/forms'

import { GamePage } from '../game/tictactoe';
import { TicTacRedux } from '../game/tictac.redux';

import { MatUiTest } from '../material/ui';

//error page
import { Err404Page } from '../system/messages';

export const mainMenu={
  default:'/matuitest',
  loginUrl:'/login',
  items:[
    {path:'/redux', matIcon:'person', activeClass:'active', 
      title:'Redux', component: LoginForm }, 
    {path:'/login', matIcon:'person', activeClass:'active', 
      title:'Sign in', component: LoginForm },
    {path:'/register', matIcon:'person', activeClass:'active', 
      title:'Register', component: RegisterForm },
    {path:'/matuitest', matIcon:'games', activeClass:'active', 
      title:'Materual UI', component: MatUiTest },
    {path:'/tictac2', matIcon:'games', activeClass:'active', 
      title:'TicTac2', component:TicTacRedux },
    {path:'/tictac', matIcon:'games', activeClass:'active', 
      title:'TicTac1', component:GamePage },      
    {path:'/user', matIcon:'person', activeClass:'active', 
      title:'User', component:UserPage },
    {path:'/router/child1', matIcon:'home', activeClass:'active', 
      title:'Home', component:HomePage},    
    {path:null, component:Err404Page},
  ]
}