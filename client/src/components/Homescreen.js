import React from 'react'
import '../styles/App.css';
import '../styles/Homescreen.css'
import NightSky from '../media/night_sky.mp4';
import Logo from '../media/Mudkip.png';
import Swipe from 'react-swipe-component';

class Homescreen extends React.Component{
  state={
    loginHeight:0,
    signupHeight:0,
  }

  onSwipeDownListener = (e)=>{
    this.props.history.push("/signup")
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
    if (e[1] < 0) {
      let num = (e[1]*-1)/2.3;
      this.setState({
        loginHeight:num,
        signupHeight:0
      })
    }else if (e[1] >= 0) {
      let num = e[1]/2.3
      this.setState({
        loginHeight:0,
        signupHeight:num
      })
    }

  }


  render(){
    let loginStyles= {
      height:`${this.state.loginHeight}px`,
      backgroundColor:'black'
    }

    let signUpStyles = {
      height:`${this.state.signupHeight}px`,
      backgroundColor:'black'
    }

    return(
      <div className="homepage">
        <Swipe
              nodeName="div"
              className="test"
              mouseSwipe={true}
              delta={300}
              onSwipedDown={this.onSwipeDownListener}
              onSwipedUp={this.onSwipeUpListener}
              onSwipe={this.onSwipeListener}
              onSwipeEnd={this.onSwipeEnd}
              preventDefaultEvent={false}
              >
              <div className="homepage-intro">
                <img className="homepage-logo" alt="logo" src={Logo} />
                <h1>Mudkip</h1>
              </div>

              <p className="desc">Refine Your Job Search</p>
              <h3 className="desc">Swipe Up/Down to Get Started</h3>
              <video id="background-video" autoPlay muted loop>
                <source src={NightSky} type="video/mp4" />
              </video>

              <div className="homepage-nav">
                <div style={signUpStyles} className="signUp-show"><p>Join for Free!</p></div>
                <p className="">LOGIN <i id="up-btn" className="fas fa-chevron-up"></i>
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
