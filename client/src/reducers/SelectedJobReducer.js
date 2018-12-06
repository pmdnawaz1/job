const SelectedJobReducer = (state={}, action) => {
  switch (action.type) {
    case "SELECT_JOB":
      return {...state, ...action.payload}
    case "UPDATE_JOB":
      return action.payload
    case "POST_TASK":{
      let newArr = [...state.tasks, action.payload]
      return {...state, tasks: newArr}
    }
    case 'SAVE_JOB':{
      return {...state, ...action.payload}
    }
    case 'SAVE_FILES':{
      return {...state, job_file: action.payload}
    }
    default:
      return state
  }
}

export default SelectedJobReducer
