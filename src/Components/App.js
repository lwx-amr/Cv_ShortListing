import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter} from "react-router-dom";

// Components
import Home from "./home/Home";
import AfterLogin from "./AfterLogin";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import PSForget from "./auth/PSForget";
import EmailConfirm from "./auth/EmailConfirm";
import ResetSent from "./auth/ResetSent";

// Auth Calls
import {init, signout } from './../Utils/authCalls';

class App extends Component {
  state = {
    init: true,
    loggedInUser: '',
    token: ''
  };

  componentDidMount() {
    init()
      .then(user => {
        this.handleLogin(user)
      })
      .catch(error => {
        this.setState({
          init: false
        })
      })
  };

  handleLogin = (user) => {
    let userID = user.user._id;
    this.setState({
      loggedInUser: user,
      init: false
    });
    // this.props.history.push('/ws-list/'+userID);
  }

  handleSignout = () => {
    signout()
      .then(user => {
        this.setState({
          loggedInUser: '',
          token: '',
        });
      })
      .catch(error => {
        this.setState({ errMessage: error })
      })
  }

  render(){
    return (
      <div className="app-main">
      {(!this.state.loggedInUser)? (
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route 
            path="/login"
            component={() => <Login login={this.handleLogin} />}  
          />
          <Route path="/Signup" component={Signup} />
          <Route path="/forget-password" component={PSForget} />
          <Route path="/email-confirmation" component={EmailConfirm} />
          <Route path="/reset-email-sent" component={ResetSent} />
        </Switch> 
      ) : ( <AfterLogin user={this.state.loggedInUser} /> )}
      </div>
    );
  }
}

export default withRouter(App);
