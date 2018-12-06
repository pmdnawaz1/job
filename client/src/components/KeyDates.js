import React from 'react';
import { connect } from 'react-redux';
import JobNav from './JobNav'
import JobHeader from './JobHeader';
import "../styles/keydates.css";
import { updateJob } from '../actions'

class KeyDates extends React.Component {
  state={
    deadline:"",
    applied: "",
    interview1: "",
    interview2: "",
    offer:""
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    },()=>{
      this.props.updateJob(this.state, this.props.job.id)
        .then(()=>{
          this.setState({
            deadline:this.props.job.deadline,
            applied: this.props.job.applied,
            interview1: this.props.job.interview1,
            interview2: this.props.job.interview2,
            offer:this.props.job.offer
          })
        })
    })
  }

  componentDidMount(){
    this.setState({
      deadline:this.props.job.deadline,
      applied: this.props.job.applied,
      interview1: this.props.job.interview1,
      interview2: this.props.job.interview2,
      offer:this.props.job.offer
    })
  }

  render(){
    let checkJob=()=>{
      if (typeof this.props.job.id !== 'undefined') {
        return (
          <div className="keydates">
            <JobHeader title={this.props.job.title} />
              <h1>Key Dates</h1>
              <ul className="job-info-ul">
                <li><strong>Deadline:</strong> <input name="deadline" onChange={this.changeHandler} value={this.state.deadline} type="date"></input></li>
                <li><strong>Applied:</strong> <input value={this.state.applied}  name="applied" onChange={this.changeHandler} type="date" ></input></li>
                <li><strong>Interview 1:</strong> <input value={this.state.interview1}  name="interview1" onChange={this.changeHandler} type="date"></input></li>
                <li><strong>Interview 2:</strong> <input name="interview2" value={this.state.interview2}  onChange={this.changeHandler} type="date" ></input></li>
                <li><strong>Offer:</strong> <input type="date" name="offer" value={this.state.offer}  onChange={this.changeHandler}  ></input></li>
              </ul>
            <JobNav jobId={this.props.job.id}/>
          </div>
        )
      }else{
        return(<div>{this.props.history.push("/dashboard")}</div>)
      }
    }
    return checkJob();
  }
}

const mapStateToProps = (state) => {
  return {
    job:state.selectedJob
  }
}

export default connect(mapStateToProps, { updateJob })(KeyDates)
