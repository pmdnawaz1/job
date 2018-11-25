import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Login.css'

class Login extends React.Component{
  state={
    username:"",
    password:""
  }

  changeHandler = (e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  submitHandler = (e)=>{
    e.preventDefault();
    this.props.history.push('/joblist')
  }

  render(){
    return (
      <div className="login-wrapper">
          <div className="left">
            <div className="signin">
              <div className="logo">
                <h1>Login</h1>
              </div>
              <form onSubmit={this.submitHandler}>
                <div>
                  <label htmlFor="username">Username</label>
                  <input className="text-input" name="username" type="text" value={this.state.username} onChange={this.changeHandler} />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input className="text-input" name="password" type="password" value={this.state.password} onChange={this.changeHandler} />
                </div>
                <div>
                  <input type="submit" className="primary-btn" value="Sign in"/>
                </div>
              </form>
              <div className="links">
                <Link className="forgot-password" to="/">Forgot Password?</Link>
              </div>
              <div className="or">
                <hr className="bar" />
                <span>OR</span>
                <hr className="bar" />
              </div>

              <Link to="/signup" className="secondary-btn">Create an account</Link>

            </div>
          </div>

          <div className="right">
            <div id="showcase">
              <div className="showcase-content">
                <div className="right-container">
                  <h1 className="showcase-text">Immerse your life in <strong>Music</strong> with your Social Jukebox</h1>
                  <Link to="/signup" className="secondary-btn">Join for Free</Link>
                </div>
              </div>
            </div>
          </div>

        </div>

    )
  }
}



export default Login
