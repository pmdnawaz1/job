import React from 'react'
import { connect } from 'react-redux'
import { scrapeJobs } from '../actions'
import SelectUSState from 'react-select-us-states'
import '../styles/Web.css'
class Web extends React.Component{

  state={
    job_title:"",
    city:"",
    state:""
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

  render(){
    return(
      <div>
        <form className="web-form" onSubmit={this.submitHandler}>
            <input name="job_title" value={this.state.job_title} onChange={this.changeHandler} placeholder="Position" type="text"></input>
            <input name="location" onChange={this.changeHandler} value={this.state.location} placeholder="City" type="text"></input>
            <SelectUSState className="state-select" onChange={this.setNewValue}/>
          <input className="submit-btn web-submit" type="submit" value='Search'></input>
        </form>
      </div>
    )
  }
}

export default connect(null, { scrapeJobs })(Web)
