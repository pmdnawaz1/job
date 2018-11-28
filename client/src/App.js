import React, { Component } from 'react';
import './styles/App.css';
import Homescreen from './components/Homescreen';
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom';
import Login from './components/Login';
import Joblist from './components/Joblist'
import NewJoblist from './components/NewJoblist'
import JoblistShow from './components/JoblistShow'
import Dashboard from './components/Dashboard'
import { fetchJoblists } from './actions';


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
        <Route exact path="/" component={Homescreen} />
        <Route exact path='/login' component={Login} />
        <AuthRoute exact path='/joblists' component={Joblist} />
        <AuthRoute exact path='/joblists/new' component={NewJoblist} />
        <AuthRoute path='/dashboard' component={Dashboard} />
      </div>
    );
  }
}

export default withRouter(connect(null, { fetchJoblists })(App));
