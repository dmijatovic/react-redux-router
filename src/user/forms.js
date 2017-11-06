
import React from 'react';

import { Paper, TextField, Button } from 'material-ui';


export class LoginForm extends React.Component {
  constructor(props){
    super(props)
    //initialize states
    this.state={
      name:null,
      password:null
    }
  }

  componentWillMount(){
    //console.log("Login...starting");
    this.setState({
      name:"",
      password:""
    })
  }
  changeUserName(e){
    //console.log("Change name...", e.target.value);
    this.setState({
      name: e.target.value 
    });
  }
  changePass(e){
    //console.log("Change pass...", e.target.value);
    this.setState({
      password: e.target.value 
    });
  }

  logIn(){
    console.log("Login...", this.state);
  }
  render() {
    return (
      <section className="login-form">
        
          <h2>Login page</h2>
          
          <section className="input-fields" >
            <TextField 
              id="name"
              label="User"
              type="email"
              placeholder="Your email address"
              value={this.state.name}
              onChange={this.changeUserName.bind(this)}
              required
            />
            <TextField 
              id="password"
              label="Password"
              type="password"
              placeholder="Your password"
              value={this.state.password}
              onChange={this.changePass.bind(this)}
              required
            />
          </section>

          <section className="form-nav">
            <Button
              disabled={false}
              onClick={this.logIn.bind(this)}>
             Test
            </Button>
          </section> 
       
      </section>
    );
  }
}

export class RegisterForm extends React.Component {
  
    render() {
      return (
        <section>
          <h2>Register page</h2>
        </section>
      );
    }
  }