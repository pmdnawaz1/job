import React from 'react'
import '../styles/Dashboard.css'
import { connect } from 'react-redux'
import { getSelectedJoblist } from '../actions'
import NewJobForm from './NewJobForm'

class Dashboard extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      selectedJoblist: {},
      plusClicked: false
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
        selectedJoblist: this.props.selectedJoblist
      })
    }
  }

  newJob = (event) => {
    this.setState((state) => {
      return {
        plusClicked: !state.plusClicked
      };
    });
  }

  displayForm = () => {
    if (this.state.plusClicked) {
      return (
        <NewJobForm joblistId={this.props.userObj.dashboard_id} displayToggle={this.newJob} />
      )
    }
  }

  displayToggle = ()=>{
    let style = {
      display: 'none'
    }
    if (!this.state.plusClicked) {
      return style
    }
  }

  overlay = () => {
    if (this.state.plusClicked) {
      return {
        backgroundColor:'black',
        opacity:0.6
      }
    }
  }

  render(){
    console.log(this.props.selectedJoblist)
    return(
      <div className="dashboard">
        <header>
          <span onClick={()=> this.props.history.push("/joblists")} className="nav-span"><i className="fas fa-chevron-left"></i></span>
            <h1>{this.displayName()}</h1>
          <span className="nav-span"><i className="fas fa-user-cog"></i></span>
          <hr/>
        </header>
          <section className="dashboard-content">
            <div style={this.displayToggle()} className="form-div">
              {this.displayForm()}
            </div>

          </section>
        <nav className="bottom-nav">
          <p className="bookmark-icon"><i className="far fa-bookmark"></i></p>
          <p className="internet-icon" ><i className="fas fa-globe-americas"></i></p>
          <p onClick={this.newJob} className="nav-plus"><i className="far fa-plus-square"></i></p>
          <p className="list-icon"><i className="fas fa-list-ul"></i></p>
          <p className="calendar-icon"><i className="far fa-calendar-alt"></i></p>
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
