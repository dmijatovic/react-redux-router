
import {
  AppOutlet,UserOutlet,SystemOutlet,PublicOutlet
} from '../system/outlets';

export const mainOutlet={
  default:'/matuitest',
  menuItems:[
    {path:'/app', matIcon:'person', activeClass:'active', 
      title:'Main app page', component: AppOutlet },
    {path:'/user', matIcon:'person', activeClass:'active', 
      title:'User outlet', component: UserOutlet },
    {path:'/system', matIcon:'person', activeClass:'active', 
      title:'System outlet', component: SystemOutlet },  
    {path:'/', matIcon:'person', activeClass:'active', 
      title:'Public', component: PublicOutlet }
  ]}