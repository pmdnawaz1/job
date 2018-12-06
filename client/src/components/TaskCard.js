import React from 'react'


class TaskCard extends React.Component{

  state={
    iconClass:"task-check far fa-square",
    card:"task"
  }

  toggleSquare = (e) => {
    if (this.state.iconClass === "task-check far fa-square") {
      this.setState({
        iconClass: "task-check far fa-check-square",
        card: "task lined"
      },()=>{

      })
    }else{
      this.setState({
        iconClass:"task-check far fa-square",
        card: "task"
      },()=>{

      })
    }
  }

  componentDidMount(){
    if (this.props.info.checked) {
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
      <div className={this.state.card}  >
        <h3>{this.props.info.content}<i onClick={this.toggleSquare} className={this.state.iconClass}></i></h3>
        <small>Due Date: {this.props.info.due_date}</small>
      </div>
    )
  }
}

export default TaskCard
