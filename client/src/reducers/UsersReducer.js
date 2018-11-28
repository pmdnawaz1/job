const UsersReducer = (state={}, action)=>{
  switch (action.type) {
    case 'FETCH_JOBLISTS':
      return action.payload;
    case 'UPDATE_DASHBOARD_ID':{
      return {...state, dashboard_id: action.payload.dashboard_id}
    }
    case 'POST_JOBLIST':{
      let newArr = [...state.joblists, action.payload]
      return {...state, joblists: newArr}
    }
    default:
      return state
  }
}


export default UsersReducer
