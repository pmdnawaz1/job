const SelectedJobReducer = (state={}, action) => {
  switch (action.type) {
    case "SELECT_JOB":
      return action.payload
    default:
      return state
  }
}

export default SelectedJobReducer
