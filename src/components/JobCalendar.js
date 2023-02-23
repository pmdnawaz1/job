import React from 'react';
import Calendar from 'react-calendar'
import JobHeader from './JobHeader'
import JobNav from './JobNav'
import { connect } from 'react-redux'

class JobCalendar extends React.Component{
  render(){
    let checkJob=()=>{
      if (typeof this.props.job.id !== 'undefined') {
          return(
            <div>
              <JobHeader title={this.props.job.title}  />
              <Calendar className="calendar" />
              <JobNav jobId={this.props.job.id} />
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
  return{
    job:state.selectedJob
  }
}

export default connect(mapStateToProps)(JobCalendar)
