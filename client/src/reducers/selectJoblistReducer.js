const selectedJoblistReducer = (selectedJoblist=null, action)=>{
  switch (action.type) {
    case "SET_JOBLIST":
      return action.payload;

    case 'UPDATE_DASHBOARD_ID':

    return action.payload.joblists.filter((job) => job.id === action.payload.dashboard_id);
    default:
      return selectedJoblist;
  }
}


export default selectedJoblistReducer
