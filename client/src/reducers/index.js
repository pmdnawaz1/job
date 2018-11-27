import { combineReducers } from 'redux';
import JoblistReducer from './JoblistReducer'
import selectedJoblistReducer from './selectJoblistReducer'




export default combineReducers({
  userObj: JoblistReducer,
  selectedJoblist: selectedJoblistReducer
})
