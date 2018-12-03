import React from 'react'
import Logo from '../media/Mudkip.png';
import { withRouter } from 'react-router'

const JobHeader = (props) => {
  return(
    <div>
      <div className="newjoblist-header">
      <span onClick={()=> props.history.push("/dashboard")} className="nav-span">Dashboard</span>
        <h1 className="jobheader-h1">{props.title.split(" ")[0]+" "+props.title.split(" ")[1]}</h1>
        <img className="logo" alt="logo" src={Logo} />
      </div>
      <hr className="header-hr" />
    </div>

  )
}

export default withRouter(JobHeader)
