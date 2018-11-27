import React, { Component } from 'react';
import './styles/App.css';
import Homescreen from './components/Homescreen';
import { Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Joblist from './components/Joblist'
import NewJoblist from './components/NewJoblist'
import JoblistShow from './components/JoblistShow'

const AuthRoute = ({ component: Component, ...rest }) => {
  const checkAuth = () =>{
    const token  = window.localStorage.getItem('jwt');
    if(!token){
      return false
    }
    return true
  }

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
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Homescreen} />
        <Route exact path='/login' component={Login} />
        <AuthRoute exact path='/joblists' component={Joblist} />
        <AuthRoute exact path='/joblists/new' component={NewJoblist} />
        <AuthRoute path='/joblists/:id' component={JoblistShow} />
      </div>
    );
  }
}

export default App;
