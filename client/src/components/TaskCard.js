import React from 'react'


class TaskCard extends React.Component{
  render(){
    return(
      <div>
        <p>{this.props.info.content}</p>
      </div>
    )
  }
}

export default TaskCard
