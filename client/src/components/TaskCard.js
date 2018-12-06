import React from 'react'


class TaskCard extends React.Component{

  state={
    iconClass:"task-check far fa-square"
  }

  toggleSquare = (e) => {
    if (this.state.iconClass === "task-check far fa-square") {
      this.setState({
        iconClass: "task-check far fa-check-square"
      })
    }else{
      this.setState({
        iconClass:"task-check far fa-square"
      })
    }
  }

  render(){
    return(
      <div className="task"  >
        <h3>{this.props.info.content}<i onClick={this.toggleSquare} className={this.state.iconClass}></i></h3>
        <small>Due Date: {this.props.info.due_date}</small>
      </div>
    )
  }
}

export default TaskCard
