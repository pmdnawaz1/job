import React from 'react';
import { withRouter } from 'react-router'

const DashboardNav = (props) => {
  let dashboard = () => {
    props.history.push('/dashboard')
  }

  let internet = () => {
    props.history.push('/search')
  }


  return(
    <nav className="bottom-nav">
      <p className="bookmark-icon" onClick={dashboard}><i className="far fa-bookmark"></i></p>
      <p className="internet-icon" onClick={internet}><i className="fas fa-globe-americas"></i></p>
      <p className="nav-plus"><i className="far fa-plus-square"></i></p>
      <p className="list-icon"><i className="fas fa-list-ul"></i></p>
      <p className="calendar-icon"><i className="far fa-calendar-alt"></i></p>
    </nav>
  )
}

export default withRouter(DashboardNav)
