import { combineReducers } from 'redux';
import UsersReducer from './UsersReducer'
import selectedJoblistReducer from './selectJoblistReducer'
import JobsReducer from './JobsReducer'



export default combineReducers({
  userObj: UsersReducer,
  selectedJoblist: selectedJoblistReducer,
  jobs: JobsReducer
})
