import React from 'react'
import { Route, Link } from 'react-router-dom';
import '../styles/App.css';
import '../styles/Homescreen.css'
import Login from './Login';
import NightSky from '../media/night_sky.mp4';
import Swipe from 'react-swipe-component';

class Homescreen extends React.Component{
  state={
    loginHeight:0,
    signupHeight:0,
  }

  onSwipeDownListener = (e)=>{
    console.log("swipped down");
  }

  onSwipeUpListener = () =>{
    this.props.history.push('/login');
  }

  onSwipeEnd = ()=>{
    this.setState({
      loginHeight:0,
      signupHeight:0
    })
  }

  onSwipeListener = (e)=> {
    console.log(e);
    if (e[1] < 0) {
      let num = e[1]*-1;
      this.setState({
        loginHeight:num
      })
    }else if (e[1] >= 0) {
      this.setState({
        loginHeight:0
      })
    }

  }


  render(){
    let loginStyles= {
      height:`${this.state.loginHeight}px`,
      backgroundColor:'black'
    }
    return(
      <div className="homepage">
        <Swipe
              nodeName="div"
              className="test"
              mouseSwipe={true}
              delta={150}
              onSwipedDown={this.onSwipeDownListener}
              onSwipedUp={this.onSwipeUpListener}
              onSwipe={this.onSwipeListener}
              onSwipeEnd={this.onSwipeEnd}
              preventDefaultEvent={false}
              >
              <h1>Mudkip</h1>
              <video id="background-video" autoPlay muted loop>
                <source src={NightSky} type="video/mp4" />
              </video>
              <div className="signUp-show">Hello</div>
              <div className="homepage-nav">
                <p className="primary-btn login-btn">LOGIN <i id="up-btn" className="fas fa-chevron-up"></i>
                <span className="divider">/</span>
                <i id="down-btn" className="fas fa-chevron-down"></i> SIGNUP
                </p>
                <div className='login-show' style={loginStyles}>
                  <p>Welcome Back!</p>
                </div>
              </div>




          </Swipe>

      </div>
    )
  }
}


export default Homescreen
