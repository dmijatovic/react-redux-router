//react
import React from 'react';
//redux
import { createStore } from 'redux';
import { tictacReducer } from './tictac.store';

/* here did not make sense to 
// have more that 1 reducer 
//create store
const reducers = combineReducers({  
  board: tictacReducer,  
  winner: checkWinner,
  active: checkEnd
})*/
const store = createStore(tictacReducer);
let data = store.getState();
//console.log("Created store...", data);    
/*
store.subscribe(()=>{
  debugger     
  data = store.getState();
})*/    

//react main component
export const TicTacRedux = () => {  
  /**
   * spreading data into component 
   * passes them properly to children
   */
  return(
    <div>
      <h1>It works</h1>
      <TicTacToe {...data}/>
    </div>
  )  
}


/**
 * Tic tac toe game component 
 */
class TicTacToe extends React.Component{  
  /*constructor(props){
    super(props);      
  }*/
  /**
   * subscribe to store and listen for changes 
   * when changes happen force the update of the component
   * (and it's children).
   * NOTE! getting values from the store 
   * is in render() method, when placed outside 
   * render() it seems not to pass values to props
   */
  componentDidMount(){    
    //subscription returns unsibscribe method
    this.unsubscribe = store.subscribe(()=>{      
      //debugger       
      //data changed force update!
      this.forceUpdate();
    });        
  }
  /**
   * we need to unsubscribe from redux store
   */
  componentWillUnmount(){
    this.unsubscribe();
  }

  playerTurn = () =>{
    let player=this.props.xSign;
    if (this.props.xTurn!==true){
      player=this.props.oSign;
    }
    if (this.props.active===false){      
      return(
        `GAME OVER!`
      )
    }else{
      return(
        `Player ${player} turn`
      )
    }    
  }

  cellClick=(cell)=>{
    //only if game is active
    if (this.props.active === true){
      //debugger 
      store.dispatch({
        type:'CELL_CLICK',
        payload: cell
      })    
      //note order 
      //first we will 
      //check on END
      store.dispatch({
        type:'CHECK_END'      
      });

      store.dispatch({
        type:'CHECK_WINNER'      
      });

      store.dispatch({
        type:'TOGGLE_TURN'      
      });
    }
  }

  nextGame = () =>{
    store.dispatch({
      type:"NEW_GAME",
      payload:true
    });   
    
  }

  render(){
    //debugger
    //get current store values
    this.props = store.getState();
    console.log("TicTacToe.render...props...", this.props);
    return(
      <div className="game">        
        <section className="board">          
          <Board 
            squares={ this.props.squares }            
            onClick={(cell) => this.cellClick(cell) }
          />
        </section>
        <section className="info">      

          <div className="info-title">Game info</div>

          <div>{ this.playerTurn() }</div>

          <div>Winner: {this.props.winner}</div>      
          
        </section>
        <section className="commands">
          <button onClick={ this.nextGame }> New game </button>
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
    //console.log("Board render...", this.props);
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











