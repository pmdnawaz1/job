import React from 'react'
import { baseURL } from '../actions'


class NewJoblist extends React.Component{

  state={
    joblistName:"",
    opacity:0.6
  }

  changeHandler = (e) =>{
    if (e.target.value) {
      this.setState({
        [e.target.name] : e.target.value,
        opacity:1
      })
    }else{
      this.setState({
        opacity:0.6
      })
    }
  }

  submitHandler = (e) =>{
    e.preventDefault();
    let token = "Bearer " + localStorage.getItem("jwt");
    let options = {
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
        'Authorization': token
      },
      body:JSON.stringify({
        joblist: {
          name: this.state.joblistName
        }
      })
    }
    return fetch(`${baseURL}/joblists`, options)
      .then(r=>r.json())
      .then(()=>{
        this.props.history.push('/joblists')
      })
      .catch(console.error)
  }

  render(){
    return(
      <div className="new-joblist">
        <div className="newjoblist-header">
        <span onClick={()=> this.props.history.push("/joblists")} className="nav-span">Back</span>
          <h1><i style={{color:'green', opacity:this.state.opacity}} className="far fa-plus-square"></i> Joblist</h1>
          <span onClick={this.submitHandler} className="nav-span">Save</span>
        </div>
        <hr/>
        <form onSubmit={this.submitHandler}>
          <div className="joblist-name">
            <label htmlFor="joblistName"><i className="fas fa-clipboard-list"></i></label>
            <input value={this.state.listName} onChange={this.changeHandler} name="joblistName" type="text" placeholder="List Name"/>
          </div>

          <input autoFocus className="log-out save-btn" style={{opacity:this.state.opacity}} type='submit' value="Save" />
        </form>
      </div>
    )
  }
}

export default NewJoblist
