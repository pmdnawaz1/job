const SelectedJobReducer = (state={}, action) => {
  switch (action.type) {
    case "SELECT_JOB":
      return {...state, ...action.payload}
    case "UPDATE_JOB":
      return {...state,...action.payload}
    case "POST_TASK":{
      let newArr = [...state.tasks, action.payload]
      return {...state, tasks: newArr}
    }
    default:
      return state
  }
}

export default SelectedJobReducer
