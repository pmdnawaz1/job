import React from 'react'
import JobHeader from './JobHeader'
import JobNav from './JobNav'
import { connect } from 'react-redux'
import '../styles/tasks.css'
import TaskCard from './TaskCard'


class Tasks extends React.Component{

  newTask= () => {
    this.props.history.push(`/jobs/${this.props.job.id}/tasks/new`)
  }

  displayTasks = () => {
    if (typeof this.props.job.tasks !== "undefined") {
      return this.props.job.tasks.map((task)=>{
        return(
        <TaskCard key={task.id} info={task}/>
      )
      })
    }

  }

  render(){

    let checkJob=()=>{
      if (typeof this.props.job.id !== 'undefined') {
        return (
          <div className="tasks">
            <JobHeader title={this.props.job.title}/>
              <h3 className="task-intro">Tasks</h3>
              <button onClick={this.newTask} className="add-task-btn"><i className="far fa-plus-square"></i>Add A Task</button>
              {this.displayTasks()}
            <JobNav jobId={this.props.job.id} />
          </div>
        )
      }else{
        return(<div>{this.props.history.push("/dashboard")}</div>)
      }
    }
    return checkJob()
  }

}

const mapStateToProps = (state) => {
  return {
    job: state.selectedJob
  }
}

export default connect(mapStateToProps)(Tasks)
