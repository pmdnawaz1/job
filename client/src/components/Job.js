import React from 'react'
import { connect } from 'react-redux'
import '../styles/Job.css'
import Logo from '../media/Mudkip.png';

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
      salary:"",
      link:this.props.selectedJob.job_link ? this.props.selectedJob.job_link : "",
      description:this.props.selectedJob.snippet ? this.props.selectedJob.snippet : ""
    })
  }

  render(){
    if (typeof this.state.title === 'undefined') {
      return(<div>{this.redirect()}</div>)
    }

    return(
      <div className="job">
        <div className="newjoblist-header">
        <span onClick={()=> this.props.history.push("/dashboard")} className="nav-span">Back</span>
          <h1>{this.state.title.split(" ")[0]+" "+this.state.title.split(" ")[1]}</h1>
          <img className="logo" alt="logo" src={Logo} />
        </div>
        <hr className="header-hr" />
        <h3 className="info-header">Job Information</h3>

        <ul className="job-info-ul">
          <li><strong>Company:</strong> <input name="company" onChange={this.changeHandler} value={this.state.company}></input></li>
          <li><strong>Job title:</strong> <input name="title" onChange={this.changeHandler} value={this.state.title}></input></li>
          <li><strong>Location:</strong> <input name="location" onChange={this.changeHandler} value={this.state.location}></input></li>
          <li><strong>Salary:</strong> <input name="salary" onChange={this.changeHandler} value={this.state.salary}></input></li>
          <li><strong>Post URL:</strong> <input name="link" onChange={this.changeHandler}  name="link" className="post-url" onChange={this.changeHandler} value={this.state.link}></input></li>
          <li><strong>Description</strong></li>
          <li><textarea  name="description" onChange={this.changeHandler} value={this.state.description} className='description'></textarea></li>
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
