import React, { Component } from 'react';
import './styles/App.css';
import Homescreen from './components/Homescreen';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter, Switch } from 'react-router-dom';
import Login from './components/Login';
import Joblist from './components/Joblist';
import NewJoblist from './components/NewJoblist';
import Dashboard from './components/Dashboard';
import { fetchJoblists } from './actions';
import Job from './components/Job';
import KeyDates from './components/KeyDates'
import Tasks from './components/Tasks'
import NewTask from './components/NewTask'


export const checkAuth = () =>{
  const token  = window.localStorage.getItem('jwt');
  if(!token){
    return false
  }
  return true
}

export const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props =>
        checkAuth()
        ? (
          <Component {...props} />
        )
        : (
          <Redirect to={{pathname: "/login" }} />
        )
      } />
  );
}

class App extends Component {

  componentDidMount(){
    if (checkAuth()) {
      this.props.fetchJoblists(localStorage.getItem('jwt'));
    }
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homescreen} />
          <Route exact path='/login' component={Login} />
          <AuthRoute exact path='/joblists' component={Joblist} />
          <AuthRoute exact path='/joblists/new' component={NewJoblist} />
          <AuthRoute path='/dashboard' component={Dashboard} />
          <AuthRoute path='/jobs/:id/tasks/new' component={NewTask} />
          <AuthRoute path='/jobs/:id/tasks' component={Tasks} />
          <AuthRoute path='/jobs/:id/keydates' component={KeyDates} />
          <AuthRoute path='/jobs/:id' component={Job} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(null, { fetchJoblists })(App));
