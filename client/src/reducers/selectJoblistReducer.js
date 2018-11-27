const selectedJoblistReducer = (selectedJoblist=null, action)=>{
  switch (action.type) {
    case "SET_JOBLIST":
      return action.payload;
    default:
      return selectedJoblist;
  }
}


export default selectedJoblistReducer
