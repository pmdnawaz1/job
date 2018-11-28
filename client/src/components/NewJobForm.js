import React from 'react';
import '../styles/newJobForm.css';
import { postJob } from '../actions';
import { connect } from 'react-redux';

class NewJobForm extends React.Component{
  state = {
    title:"",
    location:"",
    company_name:"",
    snippet: "",
    job_link:""
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.postJob(this.state)
  }

  render(){
    return(
      <form onSubmit={this.submitHandler} className="new-job-form">
        <h1>Add A Job!</h1>
        <span onClick={this.props.displayToggle} className="close-btn">X</span>
        <div>
          <input value={this.state.title} onChange={this.changeHandler} name="title" type="text" placeholder="Job Title"></input>
        </div>
        <div>
          <input value={this.state.company_name} onChange={this.changeHandler} name="company_name" type="text" placeholder="Company Name"></input>
        </div>
        <div>
          <input value={this.state.location} onChange={this.changeHandler} name="location" type="text" placeholder="Location"></input>
        </div>
        <div>
          <textarea value={this.state.snippet} onChange={this.changeHandler} name="snippet" rows="4" placeholder="Description"></textarea>
        </div>
        <div>
          <input value={this.state.job_link} onChange={this.changeHandler} name="job_link" type="text" placeholder="Paste Link"></input>
        </div>
        <input className="submit-btn" type="submit"></input>
      </form>
    )
  }
}



export default connect(null, { postJob })(NewJobForm)
