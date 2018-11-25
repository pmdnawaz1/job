import { combineReducers } from 'redux';

const joblistsReducer = ()=>{
  return[]
}


const selectedJoblistReducer = (selectedJob=null, action)=>{
  switch (action.type) {
    case "JOB_SELECTED":
      return action.payload;
      break;
    default:
      return selectedJob;
  }
}

export default combineReducers({
  joblists: joblistsReducer,
  selectedJoblist: selectedJoblistReducer
})
