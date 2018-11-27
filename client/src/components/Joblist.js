import React from 'react';
import '../styles/Joblist.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import JoblistCard from './JoblistCard';

class Joblist extends React.Component{

  logOut = ()=>{
    localStorage.clear();
    this.props.history.push("/")
  }

  displayJoblists = ()=>{
    if (typeof this.props.userObj.joblists !== 'undefined') {
      return this.props.userObj.joblists.joblists.map((joblistObj)=>{
        return <JoblistCard key={joblistObj.id}  info={joblistObj}/>
      })
    }
  }


  render(){
    return(
      <div className="joblist">
        <div className="joblist-header">
          <i className="fas fa-atlas"></i>
          <h2 className="myjoblists-header">My Joblists</h2>
        </div>
        <Link to="/joblists/new" className="joblist-add"><i style={{color:'#ff6600'}} className="far fa-plus-square"></i></Link>
        {this.displayJoblists()}
        <button style={{marginBottom:"1rem"}} onClick={this.logOut} className="log-out">Log Out</button>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    userObj: state.userObj
  }
}

export default connect(mapStateToProps)(Joblist)
