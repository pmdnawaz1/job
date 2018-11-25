import React from 'react'
import '../styles/Joblist.css'
import { Link } from 'react-router-dom'

export default class Jobist extends React.Component{
  render(){
    return(
      <div className="joblist">
        <h1>Joblists</h1>
        <hr/>
        <div className="joblist-header">
          <i className="fas fa-th-list"></i>
          <h2>My Joblists</h2>
        </div>
        <Link to="/joblists/new" className="joblist-add">+</Link>

        <div className="joblist-card">
          <h1>Name</h1>
          <p>Email</p>
          <p>Created at</p>
        </div>


        <button className="log-out">Log Out</button>
      </div>
    )
  }
}
