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

    case 'SAVE_JOB':{
      let newArr = [...selectedJoblist.jobs, action.payload]
      return {...selectedJoblist, jobs:newArr}
    }
    case "UPDATE_JOB":{
      let filtered = selectedJoblist.jobs.filter((job) => job.id !== action.payload.id )
      let newArr = [...filtered, action.payload]
      return {...selectedJoblist, jobs: newArr}
    }
    case 'SAVE_FILES':{
      let job = selectedJoblist.jobs.find((job) => job.id === action.payload.job_id);
      let newJob = {...job, job_file: action.payload}
      let filtered = selectedJoblist.jobs.filter((job) => job.id !== action.payload.job_id)
      let newArr = [...filtered, newJob]
      return {...selectedJoblist, jobs:newArr}
    }


    default:
      return selectedJoblist;
  }
}


export default selectedJoblistReducer
