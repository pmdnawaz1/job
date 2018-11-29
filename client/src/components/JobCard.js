import React from 'react'
import '../styles/JobCard.css'

class JobCard extends React.Component{
  render(){
    return(
      <div className="job-card">
        <h1>{this.props.jobInfo.title}</h1>
        <p>{this.props.jobInfo.company_name}</p>
        <p>{this.props.jobInfo.location}</p>
      </div>
    )
  }
}

export default JobCard
