import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from "react-router";
import { selectJoblist } from '../actions'




const JoblistCard = (props) => {

  let clickHandler = (e) => {
    props.selectJoblist(props.info.id)
  }


  return(
    <div onClick={clickHandler} className="joblist-card">
      <h1>{props.info.name}</h1>
      <p>Created at: {props.info.created_at}</p>
    </div>
  )
}

export default withRouter(connect(null, { selectJoblist })(JoblistCard))
