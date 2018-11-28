import React from 'react'
import '../styles/Dashboard.css'
import { connect } from 'react-redux'
import { getSelectedJoblist } from '../actions'

class Dashboard extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      selectedJoblist: {}
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.userObj !== nextProps.userObj) {
      nextProps.getSelectedJoblist(localStorage.getItem('jwt'), nextProps.userObj.dashboard_id)
    }
    if (nextProps.selectedJoblist && this.props.selectedJoblist !== nextProps.selectedJoblist) {
      this.setState({
        selectedJoblist: nextProps.selectedJoblist
      });
    }
  }

  displayName=()=>{
    if (typeof this.state.selectedJoblist !== 'undefined') {
      return this.state.selectedJoblist.name
    }
  }

  componentDidMount(){
    if (this.props.selectedJoblist && typeof this.props.selectedJoblist !== 'undefined') {
      this.setState({
        selectedJoblist: this.props.selectedJoblist[0]
      })
    }
  }



  render(){
    return(
      <div className="dashboard">
        <header>
          <span onClick={()=> this.props.history.push("/joblists")} className="nav-span"><i className="fas fa-chevron-left"></i></span>
            <h1>{this.displayName()}</h1>
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
