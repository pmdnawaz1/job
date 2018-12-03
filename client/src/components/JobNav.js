import React from 'react';
import { withRouter } from 'react-router';

const JobNav = (props) => {

  let keyDates = () => {
    props.history.push(`/jobs/${props.jobId}/keydates`)
  }

  let jobShow = () => {
    props.history.push(`/jobs/${props.jobId}`)
  }

  return(
    <nav className="job-bottom-nav">
      <p className="" onClick={jobShow} ><i className="far fa-question-circle"></i></p>
      <p className="" onClick={keyDates} ><i className="fas fa-clock"></i></p>
      <p className=""><i className="fas fa-list-ul"></i></p>
      <p className=""><i className="far fa-file"></i></p>
      <p className="calendar-icon"><i className="far fa-calendar-alt"></i></p>
    </nav>
  )
}

export default withRouter(JobNav)
