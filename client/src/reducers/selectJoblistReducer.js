const selectedJoblistReducer = (selectedJoblist=null, action)=>{
  switch (action.type) {
    case "SET_JOBLIST":
      return action.payload;

    case 'UPDATE_DASHBOARD_ID':

      return action.payload.joblists.find((job) => job.id === action.payload.dashboard_id);

    case 'POST_JOB':
    delete action.payload.joblist_id
    let newArr = [...selectedJoblist.jobs, action.payload]
    return {...selectedJoblist, jobs:newArr}
    default:
      return selectedJoblist;
  }
}


export default selectedJoblistReducer
