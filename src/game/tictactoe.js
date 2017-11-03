import React from 'react';

import './tictactoe.scss';

/**
 * Game page 
 */
export class GamePage extends React.Component{
  render(){
    return(
      <section>
        <PageTitle value="Tic Tac Toe"/>
        <TicTacToe />
      </section>
    )
  }
}

/**
 * Simple react component 
 * receives props using destructuring
 * prop name is equal to html attribute 
 * @param {*} param0 
 */
const PageTitle = ({value}) =>(
  <h1>{value}</h1>
)

/**
 * Tic tac toe game component 
 */
export class TicTacToe extends React.Component{
  constructor(props){
    super(props);
    this.state={
      active:true,
      squares:Array(9).fill(null),
      xTurn:true,
      xSign:"x",
      oSign:"o",
      winner:null
    }
  }
  componentWillMount(){
    /*this.setState={
      title:"Tic tac toe"
    }*/
    //console.log(this.props);
  }
  checkEnd(squares){
    for (let i in squares){
      if (squares[i]===null){
        //debugger 
        return false;
      }
    }
    //if got here than all is filled in
    //debugger
    return true;
  }
  /**
   * Based on lines check if player
   * reached any of winning combinations
   * @param {*} player 
   */
  checkWinner({squares, player}){
    let lines=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    if (player){
      for (let item in lines) {
        let win = lines[item];
        //check if player has all three positions 
        if (squares[win[0]]===player){
          if (squares[win[1]]===player){
            if (squares[win[2]]===player){                                                      
              //bingo! return with player
              return player;         
            }
          }
        }
      }
    }    
    //console.log("player...",player,"...moves...",moves);
    return null;
  }
  handleClick(cell){
    //create new object
    let mutate = this.state.squares.slice(),
      player=null, winner=null, active=true;

    //check if game closed
    if (!this.state.active){
      console.log("Won't work...game closed");
      return;
    }   
    //check if cell already selected 
    //debugger
    if (mutate[cell]){
      console.log("Won't work...occupied");
      return;
    }   
    //assign value
    if (this.state.xTurn){
      mutate[cell] = this.state.xSign;
      player = this.state.xSign;
    }else{
      mutate[cell] = this.state.oSign;  
      player = this.state.oSign;
    }    
    //check if we have winnar
    winner = this.checkWinner({
      squares:mutate,
      player:player
    });
    if (winner){
      //we have a winner let's close a game!
      active = false;
    }else{      
      //check end of game
      active = !this.checkEnd(mutate);
      if (active===false){
        winner="tie";
      }else{
        winner = null;
      }
    } 
    //update local state object with 
    this.setState({
      active: active,
      squares: mutate,
      xTurn: !this.state.xTurn,      
      winner: winner
    });    
  }  
  newGame(){

    console.log("newGame.this...", this);
    this.setState({
      active: true,
      xTurn: !this.state.xTurn,
      squares: Array(9).fill(null) 
    });

  }

  
  render(){    
    console.log("TicTacToe...state...",this.state);
    //you can use local functions 
    //return will render only text?!?
    const playerTurn = () =>{
      if (this.state.active===false){
        return("Game over!");
      }else if(this.state.xTurn){      
        return(`Player ${this.state.xSign} turn`)
      }else{
        return(`Player ${this.state.oSign} turn`)
      }    
    }

    return(
      <div className="game">        
        <section className="board">          
          <Board 
            squares={ this.state.squares }
            onClick={(cell) => this.handleClick(cell)}
          />
        </section>
        <section className="info">      

          <div className="info-title">Game info</div>

          <div>{ playerTurn() }</div>

          <div>Winner: {this.state.winner}</div>      
          
        </section>
        <section className="commands">
          <button onClick={this.newGame.bind(this)}> New game </button>
        </section>
      </div>
    )
  }
}

/**
 * When constructor is used we need to 
 * do some react specific 'magic'
 * super needs to be used and props
 * need to be accepted
 * If you use state, which is for local 
 * variables, it needs to be initialized 
 * in the constructor (otherwise it will not work!)
 */
class Board extends React.Component {   
  renderSquare(cell){
    //debugger
    return (
      <Square 
        value={this.props.squares[cell]}
        onClick={()=>this.props.onClick(cell)}
      />    
    )
  }
  render() {    
    //console.log("render...", this.state);
    return (
      <section>        
        <table>
          <tbody>
            <tr>
              <td>{this.renderSquare(0)}</td>
              <td>{this.renderSquare(1)}</td>
              <td>{this.renderSquare(2)}</td>
            </tr>
            <tr>
              <td>{this.renderSquare(3)}</td>
              <td>{this.renderSquare(4)}</td>
              <td>{this.renderSquare(5)}</td>
            </tr>
            <tr>
              <td>{this.renderSquare(6)}</td>
              <td>{this.renderSquare(7)}</td>
              <td>{this.renderSquare(8)}</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}

/**
 * Functional component
 * is lighter and advised 
 * for simple component list thisone
 * onClick passes event to parent
 * short notation is used
 */
const Square = (props) => {  

  return (      
    <button className="tictac-item"
      onClick={props.onClick}>
      {props.value}
    </button>
  );
  
}

