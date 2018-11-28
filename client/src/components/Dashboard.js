import React from 'react'
import '../styles/Dashboard.css'
import { connect } from 'react-redux'
import { getSelectedJoblist } from '../actions'

class Dashboard extends React.Component{

  componentWillReceiveProps = (nextProps) => {
    if (this.props.userObj !== nextProps.userObj) {
      nextProps.getSelectedJoblist(localStorage.getItem('jwt'), nextProps.userObj.dashboard_id)
    }
  }

  render(){
    console.log(this.props.selectedJoblist)
    return(
      <div className="dashboard">
        <header>
          <span onClick={()=> this.props.history.push("/joblists")} className="nav-span"><i className="fas fa-chevron-left"></i></span>
            <h1>Placeholder</h1>
          <span className="nav-span"><i className="fas fa-user-cog"></i></span>
          <hr/>
        </header>
          <section className="jobs">
          </section>
        <nav className="bottom-nav">
          <p>+</p>
          <p>Something else</p>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedJoblist: state.selectedJoblist,
    userObj: state.userObj
  }
}

export default connect(mapStateToProps, { getSelectedJoblist })(Dashboard)
