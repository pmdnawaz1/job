import React from 'react'
import '../styles/newJobForm.css'


export default class NewJobForm extends React.Component{
  render(){
    return(
      <form className="new-job-form">
        <h1>Add A Job!</h1>
        <span onClick={this.props.displayToggle} className="close-btn">X</span>
        <div>
          <input type="text" placeholder="Job Title"></input>
        </div>
        <div>
          <input type="text" placeholder="Company Name"></input>
        </div>
        <div>
          <input type="text" placeholder="Location"></input>
        </div>
        <div>
          <textarea rows="3" placeholder="Description"></textarea>
        </div>
        <div>
          <input type="text" placeholder="Paste Link"></input>
        </div>
        <input className="submit-btn" type="submit"></input>
      </form>
    )
  }

}
