const UsersReducer = (state={}, action)=>{
  switch (action.type) {
    case 'FETCH_JOBLISTS':
      return action.payload;
    case 'UPDATE_DASHBOARD_ID':{
      return {...state, dashboard_id: action.payload.dashboard_id}    
    }
    default:
      return state
  }
}


export default UsersReducer
