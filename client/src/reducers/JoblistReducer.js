const JoblistReducer = (state={}, action)=>{
  switch (action.type) {
    case 'FETCH_JOBLISTS':
      return {...state, joblists: action.payload};
    case 'UPDATE_DASHBOARD_ID':{
      let newObj ={...state.joblists, dashboard_id: action.payload.dashboard_id}
      return {...state, joblists: newObj}
    }

    default:
      return state
  }
}


export default JoblistReducer
