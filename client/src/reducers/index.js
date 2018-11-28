import { combineReducers } from 'redux';
import UsersReducer from './UsersReducer'
import selectedJoblistReducer from './selectJoblistReducer'




export default combineReducers({
  userObj: UsersReducer,
  selectedJoblist: selectedJoblistReducer
})
