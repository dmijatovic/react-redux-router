
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'material-ui';


const LoginForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      {/* form content will be injected here */ }

      <Field name="email" component="input" type="email" />
      <Field name="password" component="input" type="password" />

      <Button type="submit">
        Submit
      </Button>

    </form>
  )
}

LoginForm = reduxForm({
  form:'login'
})(LoginForm)

export default LoginForm;

/*
const RegisterForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      {/* form content will be injected here *//* }
    </form>
  )
}

RegisterForm = reduxForm({
  form:'register'
})(RegisterForm)

export default RegisterForm;*/

export class LoginPage extends React.Component{
  submit = (values) =>{
    console.log(values);
  }

  render(){
    return(
      <LoginForm onSubmit= {this.submit} />
    )
  }

}
