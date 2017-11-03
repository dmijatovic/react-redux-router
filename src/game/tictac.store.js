


const TicTacBoard={  
    active:true,
    squares:Array(9).fill(null),
    xTurn:true,
    xSign:"x",
    oSign:"o",
    winner:null  
}

export const tictacReducer = (state=TicTacBoard , action) =>{
  //what have we here
  //console.log("tictacReducer...", action);

  //distribute action
  switch(action.type){
    case "CELL_CLICK":
      if (typeof(action.payload)!==undefined){
        return setMove(state, action.payload);
      }else{
        console.error("tictacReducer...", action.type,"...payload:",action.payload);
      }
      break;    

    case "CHECK_WINNER":
      return checkWinner(state);

    case "CHECK_END":
      return checkEnd(state);

    case "TOGGLE_TURN":    
      return {
        ...state,
        xTurn: !state.xTurn
      }

    case "NEW_GAME":
      //return inital values 
      //for the store as we starting
      //new game
      return TicTacBoard;
    default:
      return state;
  }
}

const checkEnd=(state)=>{
  //debugger    
  for (let i in state.squares){
    if (state.squares[i]===null){
      //still empty squres
      return {
        ...state,
        active: true  
      };
    }
  }
  //if we here all positions 
  //are filled in
  return {
    ...state,
    active:false
  };  
}
/**
 * Based on lines check if player
 * reached any of winning combinations
 * @param {*} player 
 */
const checkWinner=(state)=>{
  //debugger  
  let lines=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ], squares = state.squares, 
    player = state.xSign;
  //set player    
  if (state.xTurn===false){
    player=state.oSign;
  } 
  for (let item in lines) {
    let win = lines[item];
    //check if player has all three positions 
    if (squares[win[0]]===player){
      if (squares[win[1]]===player){
        if (squares[win[2]]===player){                                                      
          //bingo! return with player
          return {
            ...state,
            winner: player,
            //and we need to close 
            //game here
            active: false  
          }
        }
      }
    }
  }    
  //no winnar yet 
  if (state.active===false){
    //game is finished
    //without winner    
    return {
      ...state,
      winner:'tie'
    };
  }else{
    //just return state
    return state;
  }  
}
/**
 * Handles click on tictac cell
 * @param {*} state 
 * @param {*} cell 
 */
const setMove = (state, cell) => {
  //create new object
  //debugger 
  let mutate = state.squares.slice();

  //check if game closed
  if (!state.active){
    console.log("Won't work...game closed");
    return state;
  }   
  //check if cell already selected 
  //debugger
  if (mutate[cell]){
    console.log("Won't work...occupied");
    return state;
  }   
  //assign value
  if (state.xTurn){
    mutate[cell] = state.xSign;
    //player = state.xSign;
  }else{
    mutate[cell] = state.oSign;  
    //player = state.oSign;
  }    
  //return new state object
  return{
    ...state,        
    squares: mutate   
  };
}