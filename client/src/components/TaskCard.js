import React from 'react'


class TaskCard extends React.Component{
  render(){
    return(
      <div className="task" >
        <p>{this.props.info.content}- {this.props.info.due_date}</p>
      </div>
    )
  }
}

export default TaskCard
