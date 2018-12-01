const JobsReducer = (state=[], action) => {
  switch (action.type) {
    case 'GET_WEB_JOBS':{
      return action.payload
    }
    default:
      return state
  }
}

export default JobsReducer
