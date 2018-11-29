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
    // case 'POST_JOB':{
    //   let id = action.payload.joblist_id
    //   let obj = state.joblists.find((joblist)=> joblist.id === id);
    //   delete action.payload.joblist_id
    //   let newArr = [...obj.jobs, action.payload]
    //   let newObj = {...obj, jobs:newArr}
    //   let newJoblists = [...state.joblists, newObj]
    //   return {...state, joblists:newJoblists}
    // }
    default:
      return state
  }
}


export default UsersReducer
