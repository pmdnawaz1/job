import React from 'react'
import { connect } from 'react-redux'
import '../styles/Job.css'

class Job extends React.Component{



  render(){
    return(
      <div className="job">

        <div className="newjoblist-header">
        <span onClick={()=> this.props.history.push("/dashboard")} className="nav-span">Back</span>
          <h1>{this.props.selectedJob.title.split(" ")[0]}</h1>
          <span className="nav-span">Save</span>
        </div>

        <ul>
          <li>Company: {this.props.selectedJob.company_name}</li>
          <li>Job title: {this.props.selectedJob.title}</li>
          <li>Location: {this.props.selectedJob.location}</li>
          <li>Salary: +Set Salary</li>
          <li>Post URL: {this.props.selectedJob.job_link}</li>
          <li>Description: {this.props.selectedJob.snippet}</li>
        </ul>


        <nav className="job-bottom-nav">
          <p className="bookmark-icon"><i className="far fa-bookmark"></i></p>
          <p className="internet-icon" ><i className="fas fa-globe-americas"></i></p>
          <p className="nav-plus"><i className="far fa-plus-square"></i></p>
          <p className="list-icon"><i className="fas fa-list-ul"></i></p>
          <p className="calendar-icon"><i className="far fa-calendar-alt"></i></p>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedJob: state.selectedJob
  }
}

export default connect(mapStateToProps)(Job)
