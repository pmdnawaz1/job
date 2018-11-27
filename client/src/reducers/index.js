import { combineReducers } from 'redux';
import JoblistReducer from './JoblistReducer'



const selectedJoblistReducer = (selectedJoblist=null, action)=>{
  switch (action.type) {
    case "JOBLIST_SELECTED":
      return action.payload;
    default:
      return selectedJoblist;
  }
}

export default combineReducers({
  joblists: JoblistReducer,
  selectedJoblist: selectedJoblistReducer
})
