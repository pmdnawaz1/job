import React from 'react';
import Logo from '../media/Mudkip.png'
import { withRouter } from 'react-router'

const DashboardHeader = (props) => {
  let displayName=()=>{
    if (typeof props.jobList !== 'undefined') {
      return props.jobList.name
    }
  }
  return(
    <header className="newjoblist-header dashboard-header">
      <span onClick={()=> props.history.push("/joblists")} className="nav-span"><i className="fas fa-chevron-left"></i></span>
        <h1>{displayName()}</h1>
      <img className="logo" alt="logo" src={Logo} />
    </header>
  )
}

export default withRouter(DashboardHeader)
