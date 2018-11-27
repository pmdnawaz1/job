const JoblistReducer = (state=[], action)=>{
  switch (action.type) {
    case 'FETCH_JOBLISTS':
      return action.payload;
      
    case 'POST_JOBLIST':
      return [...state, action.payload]
      
    default:
      return state
  }
}


export default JoblistReducer
