import React from 'react'
import { connect } from 'react-redux'
import { scrapeJobs } from '../actions'
import SelectUSState from 'react-select-us-states'
import '../styles/Web.css'
import SearchedCard from './SearchedCard'


class Web extends React.Component{
  state={
    job_title:"",
    city:"",
    state:"",
    page: 1
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.scrapeJobs(this.state)
  }

  setNewValue = (newValue)=> {
    this.setState({
      state:newValue
    });
  }

  displayZipJobs = () => {
    if (this.props.jobs[0]) {
      return this.props.jobs.map((job)=>{
        return <SearchedCard key={job.id} info={job} />
      })
    }

  }

  render(){
    return(
      <div className="web">
        <form className="web-form" onSubmit={this.submitHandler}>
            <input autoComplete="off" name="job_title" value={this.state.job_title} onChange={this.changeHandler} placeholder="Position" type="text"></input>
            <input autoComplete="off" name="city" onChange={this.changeHandler} value={this.state.city} placeholder="City" type="text"></input>
            <SelectUSState className="state-select" onChange={this.setNewValue}/>
          <input id="web-submit" type="submit" value='Search'></input>
        </form>
        <div className="zip-jobs">
          {this.displayZipJobs()}
        </div>
        <div className="page-nav">

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {jobs: state.jobs}
}

export default connect(mapStateToProps, { scrapeJobs })(Web)
