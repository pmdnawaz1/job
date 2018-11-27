import React from 'react';


const JoblistCard = (props) => {
  return(
    <div className="joblist-card">
      <h1>{props.info.name}</h1>
      <p>Created at: {props.info.created_at}</p>
    </div>
  )
}

export default JoblistCard;
