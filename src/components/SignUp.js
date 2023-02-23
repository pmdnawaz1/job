import React, { Component } from 'react';
import '../styles/SignUp.css'
import Logo from '../media/Mudkip.png'

class SignUp extends Component{



  state = {
    email: '',
    username: '',
    password: '',
    passwordConfirmation: ''
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    let tokenUrl = 'https://mudkip-backend.herokuapp.com/api/users'
    e.preventDefault()
    fetch(tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'user':
        {
          username: this.state.username.toLowerCase(),
          email: this.state.email.toLowerCase(),
          password: this.state.password.toLowerCase(),
          password_confirmation: this.state.passwordConfirmation.toLowerCase()
        }
    }
    )
    })
    .then(()=>{
      this.props.history.push('/');
    })
  }

  render(){
    return(
      <div className='login-wrapper'>

      <div className="left">
        <div className="signin">
        <img alt="logo" className="login-logo signup-logo" src={Logo}/>
        <form onSubmit={this.submitHandler} className='signup-fields'>
        <h3>Account Details</h3>
          <div>
            <label htmlFor="email">Email*</label>
            <input name="email" type="email" className="signup-input" value={this.state.email} onChange={this.changeHandler}/>
          </div>

          <div>
            <label htmlFor="username">Username*</label>
            <input name="username" type="text" className="signup-input" value={this.state.username} onChange={this.changeHandler}/>
          </div>

          <div>
            <label htmlFor="password">Password*</label>
            <input name="password" type="password" className="signup-input" value={this.state.password} onChange={this.changeHandler}/>
          </div>

          <div>
            <label htmlFor="passwordConfirmation">Password Confirmation*</label>
            <input name="passwordConfirmation" type="password" className="signup-input" value={this.state.passwordConfirmation} onChange={this.changeHandler}/>
          </div>

          <div>
            <input type="submit" id="signup-btn" className="primary-btn" value="Create Account"/>
          </div>
        </form>
        </div>
        </div>

        <div className="right">
          <div id="showcase-signup">
            <div className="showcase-content">
              <div className="right-container">
                <h1 className="showcase-text">Immerse your life in <strong>Music</strong> with your Social Jukebox</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp
