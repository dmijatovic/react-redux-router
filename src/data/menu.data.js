
//import React, { Component } from 'react';

//standard pages
import { HomePage } from '../router/level1';
import { UserPage } from '../user/index';

import { GamePage } from '../game/tictactoe';
import { TicTacRedux } from '../game/tictac.redux';

//error page
import { Err404Page } from '../system/messages';

export const mainMenu={
  default:'/router/child1',
  items:[  
    {path:'/tictac2', matIcon:'home', activeClass:'active', 
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