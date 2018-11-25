import React, { Component } from 'react';
import './styles/App.css';
import Homescreen from './components/Homescreen';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Joblist from './components/Joblist'
import NewJoblist from './components/NewJoblist'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Homescreen} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/joblist' component={Joblist} />
        <Route exact path='/joblists/new' component={NewJoblist} />
      </div>
    );
  }
}

export default App;
