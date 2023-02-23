import React from 'react'
import '../styles/Dashboard.css'
import { connect } from 'react-redux'
import { getSelectedJoblist } from '../actions'
import NewJobForm from './NewJobForm'
import JobCard from './JobCard'
import Web from './Web'
import Logo from '../media/Mudkip.png'
import { getTasks } from '../actions'
import TaskCard from './TaskCard'
import Calendar from './Calendar'

class Dashboard extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      selectedJoblist: {},
      plusClicked: false,
      bookmarkClicked: false,
      webClicked: false,
      taskClicked: false,
      calendarClicked:false
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.userObj !== nextProps.userObj) {
      nextProps.getSelectedJoblist(localStorage.getItem('jwt'), nextProps.userObj.dashboard_id)
    }
    if (nextProps.selectedJoblist && this.props.selectedJoblist !== nextProps.selectedJoblist) {
      this.setState({
        selectedJoblist: nextProps.selectedJoblist
      }, ()=>{
        this.props.getTasks(this.state.selectedJoblist.id)
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
      }, ()=> {
        this.props.getTasks(this.state.selectedJoblist.id)
      })
    }
    this.setState({
      bookmarkClicked:true
    })


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

  taskToggle = ()=>{
    let style = {
      display: 'none'
    }
    if (!this.state.taskClicked) {
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

  bookmark = () => {
    this.setState({
      bookmarkClicked:true,
      webClicked:false,
      calendarClicked: false
    })
  }

  showJobs = () => {
    if (this.state.bookmarkClicked) {
      if (this.props.selectedJoblist && typeof this.props.selectedJoblist !== 'undefined') {
        return this.props.selectedJoblist.jobs.map((job)=>{
          return <JobCard key={job.id} jobInfo={job} />
        })
      }
    }
  }

  jobToggle = () => {
    if (!this.state.bookmarkClicked) {
      return {
        display:'none'
      }
    }
  }

  web = () => {
    this.setState({
      bookmarkClicked:false,
      webClicked:true,
      taskClicked:false,
      calendarClicked:false
    })
  }

  displayWeb = () => {
    if (this.state.webClicked) {
      return <Web />
    }
  }

  task = () => {
    this.setState({
      plusClicked: false,
      bookmarkClicked: false,
      webClicked: false,
      taskClicked: true,
      calendarClicked:false
    })
}

  displayTasks = () => {
    if (typeof this.props.tasks[0] !== 'undefined') {
      return this.props.tasks.map(task=>{
        return(
          <TaskCard key={task.id} info={task} />
        )
      })
    }

  }

  calendar = () => {
    this.setState({
      plusClicked: false,
      bookmarkClicked: false,
      webClicked: false,
      taskClicked: false,
      calendarClicked: true
    })
  }

  displayCalendar = () => {
    if (this.state.calendarClicked) {
      return <Calendar />
    }
  }

  calendarToggle = () => {
    let style = {
      display: 'none'
    }
    if (!this.state.taskClicked) {
      return style
    }
  }


  render(){
    return(
      <div className="dashboard">
        <header className="newjoblist-header dashboard-header">
          <span onClick={()=> this.props.history.push("/joblists")} className="nav-span"><i className="fas fa-chevron-left"></i></span>
            <h1>{this.displayName()}</h1>
          <img className="logo" alt="logo" src={Logo} />
        </header>
          <hr/>
          <section className="dashboard-content">
            <div style={this.displayToggle()} className="form-div">
              {this.displayForm()}
            </div>
            <div className="jobs" style={this.jobToggle()}>
              {this.showJobs()}
            </div>
            <div >
              {this.displayWeb() }
            </div>
            <div style={this.taskToggle()}>
              <h2 style={{textAlign:'left', margin:'1rem 2rem'}}>Tasks</h2>
              {this.displayTasks()}
            </div>
            <div>
              {this.displayCalendar()}
            </div>

          </section>
          <nav className="bottom-nav">
            <p onClick={this.bookmark} className="bookmark-icon"><i className="far fa-bookmark"></i></p>
            <p onClick={this.web} className="internet-icon" ><i className="fas fa-globe-americas"></i></p>
            <p onClick={this.newJob} className="nav-plus"><i className="far fa-plus-square"></i></p>
            <p onClick={this.task} className="list-icon"><i className="fas fa-list-ul"></i></p>
            <p onClick={this.calendar} className="calendar-icon"><i className="far fa-calendar-alt"></i></p>
          </nav>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedJoblist: state.selectedJoblist,
    userObj: state.userObj,
    tasks: state.tasks
  }
}

export default connect(mapStateToProps, { getSelectedJoblist, getTasks })(Dashboard)
