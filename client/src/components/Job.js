import React from 'react'
import { connect } from 'react-redux'
import '../styles/Job.css'
import { updateJob } from '../actions';
import JobNav from './JobNav';
import JobHeader from './JobHeader'

class Job extends React.Component{

  state={
    title: "",
    company: "",
    location: "",
    salary:"",
    link:"",
    description:""
  }

  redirect = () => {
    this.props.history.push("/dashboard")
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  componentDidMount = () => {
    this.setState({
      title: this.props.selectedJob.title,
      company: this.props.selectedJob.company_name,
      location: this.props.selectedJob.location,
      salary:this.props.selectedJob.salary,
      link:this.props.selectedJob.job_link ? this.props.selectedJob.job_link : "",
      description:this.props.selectedJob.snippet ? this.props.selectedJob.snippet : ""
    })
  }

  update = () => {
    console.log("trying to update...")
    this.props.updateJob(this.state, this.props.selectedJob.id)
  }

  render(){
    if (typeof this.state.title === 'undefined') {
      return(<div>{this.redirect()}</div>)
    }

    return(
      <div className="job">
        <JobHeader title={this.state.title} />
        <h3 className="info-header">Job Information</h3>
        <ul className="job-info-ul">
          <li><strong>Company:</strong> <input name="company" onChange={this.changeHandler} value={this.state.company}></input></li>
          <li><strong>Job title:</strong> <input id="longer-link" name="title" onChange={this.changeHandler} value={this.state.title}></input></li>
          <li><strong>Location:</strong> <input name="location" onChange={this.changeHandler} value={this.state.location}></input></li>
          <li><strong>Salary:</strong> <input name="salary" placeholder="Set Salary" onChange={this.changeHandler} value={this.state.salary}></input></li>
          <li><strong>Post URL:</strong> <input id="longer-link" name="link" onChange={this.changeHandler} className="post-url" value={this.state.link}></input></li>
          <li><strong>Description</strong></li>
          <li><textarea  name="description" onChange={this.changeHandler} value={this.state.description} className='description'></textarea></li>
        </ul>

        <button className="update-btn" onClick={this.update}>Update</button>

        <JobNav jobId={this.props.selectedJob.id} />

      </div>
    )


  }
}

const mapStateToProps = (state) => {
  return {
    selectedJob: state.selectedJob
  }
}

export default connect(mapStateToProps, { updateJob })(Job)
