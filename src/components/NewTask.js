import React from 'react'
import { connect } from 'react-redux'
import { submitTask } from '../actions'

class NewTask extends React.Component{

  state={
    content:"",
    due_date:""
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.submitTask(this.state, this.props.job.id)
      .then(()=>{
        this.goBack()
      })
  }

  clickHandler = (e) => {
    this.setState({
      content: e.target.innerText
    })
  }

  goBack = () => {
    this.props.history.push(`/jobs/${this.props.job.id}/tasks`)
  }

  render(){
    let checkJob=()=>{
      if (typeof this.props.job.id !== 'undefined') {
        return (
          <div className="task-form">
            <header>
              <div onClick={this.goBack}>Cancel</div>
              <h3>New Task</h3>
              <p onClick={this.submitHandler} >Save</p>
            </header>
            <hr className="header-hr" />
            <div className="suggestions">
              <div onClick={this.clickHandler} >Apply</div>
              <div onClick={this.clickHandler} >Tweak Resume</div>
              <div onClick={this.clickHandler} >Write Cover Letter</div>
              <div onClick={this.clickHandler} >Schedule Interview</div>
            </div>
            <div className="cold-contact" onClick={this.clickHandler} >Cold Contact Someone</div>
            <form className="add-task-form">
              <div>
                <label className="label" htmlFor="content">Content</label>
                <input name="content"
                placeholder="Add a Task"
                value={this.state.content}
                onChange={this.changeHandler}
                />
              </div>
              <div>
                <label className="label" htmlFor="due_date">Due Date</label>
                <input name="due_date"
                type="date"
                value={this.state.due_date}
                placeholder="Pick A Due Date"
                onChange={this.changeHandler}
                 />
              </div>
            </form>
          </div>
        )
      }else{
        return(<div>{this.props.history.push("/dashboard")}</div>)
      }
    }
    return checkJob()
  }
}

const mapStateToProps = (state) => {
  return{
    job: state.selectedJob
  }
}

export default connect(mapStateToProps, { submitTask })(NewTask)
