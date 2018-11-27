import React from 'react';
import '../styles/Joblist.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchJoblists } from '../actions';
import JoblistCard from './JoblistCard'

class Joblist extends React.Component{

  componentDidMount(){
    this.props.fetchJoblists(localStorage.getItem('jwt'));
  }

  logOut = ()=>{
    localStorage.clear();
    this.props.history.push("/")
  }

  displayJoblists = ()=>{
    return this.props.joblists.map((joblistObj)=>{
      return <JoblistCard key={joblistObj.id}  info={joblistObj}/>
    })
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

const mapStateToProps = ({joblists})=>{
  return {joblists}
}

export default connect(mapStateToProps, { fetchJoblists })(Joblist)
