
export const publicReducer=(store,action)=>{
  console.log("Public reducer",action.type);
  return store;
}