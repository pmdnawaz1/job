import React, { Component } from 'react';
import './styles/App.css';
import Homescreen from './components/Homescreen';
import { Route } from 'react-router-dom';
import Login from './components/Login';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Homescreen} />
        <Route path='/login' component={Login} />
      </div>
    );
  }
}

export default App;
