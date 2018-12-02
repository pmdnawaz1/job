import React from 'react'
import { connect } from 'react-redux'
import '../styles/Job.css'
import Logo from '../media/Mudkip.png';

class Job extends React.Component{



  render(){
    if (typeof this.props.selectedJob.title === 'undefined') {
      this.props.history.push("/dashboard")
      return(
        <div></div>
      )
    }
    return(
      <div className="job">
        <div className="newjoblist-header">
        <span onClick={()=> this.props.history.push("/dashboard")} className="nav-span">Back</span>
          <h1>{this.props.selectedJob.title.split(" ")[0]+" "+this.props.selectedJob.title.split(" ")[1]}</h1>
          <img className="logo" alt="logo" src={Logo} />
        </div>
        <hr className="header-hr" />
        <h3 className="info-header">Job Information</h3>

        <ul className="job-info-ul">
          <li>Company: {this.props.selectedJob.company_name}</li>
          <li>Job title: {this.props.selectedJob.title}</li>
          <li>Location: {this.props.selectedJob.location}</li>
          <li>Salary: +Set Salary</li>
          <li>Post URL: <a className="link-btn" target="_blank" rel="noopener noreferrer" href={this.props.selectedJob.links}>Job Link</a></li>
          <li>Description</li>
          <li>{this.props.selectedJob.snippet}</li>
        </ul>


        <nav className="job-bottom-nav">
          <p className=""><i className="far fa-question-circle"></i></p>
          <p className="" ><i className="fas fa-clock"></i></p>
          <p className=""><i className="fas fa-list-ul"></i></p>
          <p className=""><i className="far fa-file"></i></p>

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
