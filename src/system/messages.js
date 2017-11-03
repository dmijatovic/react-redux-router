import React from 'react';

/**
 * ErrMsg simple/quick component
 * no idea how to pass props/values
 * @param errNo 
 */
export const ErrMsg = (...props) =>(  
  <div>
    <h1>Error message {this.props.errNo}</h1>
  </div>  
)

/**
 * class component
 */
export class Err404Page extends React.Component{
  componentDidMount(){    
    this.setState({
      errNo:404,
      history: this.props.history,
      path: this.props.location.pathname
    });

    //console.log("Props", this.props);
    //console.log("State", this.state);
  }
  render(){
    return(
      <div>
        <h1>Error message {this.props.errNo}</h1>
      </div>  
    )
  }
}

/*
const errTemplate = ({errNo=500,history,location}) => (
  <div>
    <h1>Error message {this.props.errNo}</h1>
  </div>  
)*/