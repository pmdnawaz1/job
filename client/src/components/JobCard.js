import React from 'react'
import '../styles/JobCard.css'
import { connect } from 'react-redux'
import { selectJob } from '../actions'
import { withRouter } from 'react-router-dom'

class JobCard extends React.Component{

  clickHandler = () => {
    this.props.selectJob(this.props.jobInfo)
    this.props.history.push(`/jobs/${this.props.jobInfo.id}`)
  }

  render(){
    return(
      <div onClick={this.clickHandler} className="job-card">
        <h1>{this.props.jobInfo.title}</h1>
        <p>{this.props.jobInfo.company_name}</p>
        <p>{this.props.jobInfo.location}</p>
      </div>
    )
  }
}

export default withRouter(connect(null, { selectJob })(JobCard))
