const TasksReducer = (state=[], action) => {
  switch (action.type) {
    case "FETCH_TASKS":{
      let arr = action.payload.filter((task) => {
        if (task.job.joblist_id) {
          return task.job.joblist_id === action.joblistId
        }

      })
      return arr;
    }
    default:
      return state
  }
}

export default TasksReducer
