import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Login.css'
import { connect } from 'react-redux'
import { fetchJoblists } from '../actions'
import Logo from '../media/Mudkip.png'



let baseURL = 'https://mudkip-backend.herokuapp.com/';


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
      let options={
        method: 'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          "auth": this.state
        })
      }
      fetch(`https://mudkip-backend.herokuapp.com/api/user_token`, options)
        .then(r=>r.json())
        .then(token => {
          if (token.jwt) {
            localStorage.setItem('jwt', token.jwt)
          }else {
            localStorage.clear();
          }
        })
        .then(()=>{
          this.props.fetchJoblists(localStorage.getItem('jwt'));
        })
        .then(()=>{
          this.props.history.push('/joblists')
        })
        .catch(console.error)
    }


  render(){
    return (
      <div className="login-wrapper">
          <div className="left">
            <div className="signin">
              <div className="logo">
                <img className="login-logo" src={Logo} alt="mudkip" />
              </div>
              <form onSubmit={this.submitHandler}>
                <div>
                  <label htmlFor="username">Username</label>
                  <input autoComplete="off" className="text-input" name="username" type="text" value={this.state.username} onChange={this.changeHandler} />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input autoComplete="off" className="text-input" name="password" type="password" value={this.state.password} onChange={this.changeHandler} />
                </div>
                <div>
                  <input type="submit" className="primary-btn" value="Sign in"/>
                </div>
              </form>
              

              <Link to="/signup" className="secondary-btn">Create an account</Link>

            </div>
          </div>


        </div>

    )
  }
}



export default connect(null, { fetchJoblists })(Login)
