
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
  items:[ 
    {path:'/login', matIcon:'person', activeClass:'active', 
      title:'Sign in', component: LoginForm },
    {path:'/register', matIcon:'person', activeClass:'active', 
      title:'Sign in', component: RegisterForm },
    {path:'/matuitest', matIcon:'games', activeClass:'active', 
    title:'Game', component: MatUiTest },
    {path:'/tictac2', matIcon:'games', activeClass:'active', 
    title:'Game', component:TicTacRedux },
    {path:'/tictac', matIcon:'games', activeClass:'active', 
      title:'Game', component:GamePage },      
    {path:'/user', matIcon:'person', activeClass:'active', 
      title:'User', component:UserPage },
    {path:'/router/child1', matIcon:'home', activeClass:'active', 
      title:'Home', component:HomePage},    
    {path:null, component:Err404Page},
  ]
}