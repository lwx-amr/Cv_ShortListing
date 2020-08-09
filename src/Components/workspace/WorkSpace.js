import React, { Component } from 'react'
import {Route, Switch, withRouter, BrowserRouter as Router} from "react-router-dom";

// Components
import Header from "./../layout/Header";
import Sidebar from "./../layout/Sidebar";
import Overview from "./Overview";
import ViewJob from "./ViewJob";
import NewJob from "./NewJob";
/*
// API Calls
import {createWorkSpace} from "../../Utils/workSpaceCalls";
*/
class WorkSpace extends Component {
  state = {
    userID: this.props.user._id,
    wsID: this.props.match.params.wsID,
    firstName: this.props.user.firstName,
    lastName: this.props.user.lastName,
    email: this.props.user.email,
  }
  render() {
    return (
      <div className="dashboard">
        <div className="main-page overview">
          {<Sidebar />}
          <div className="content-side clearfix">
            {<Header name={this.state.firstName +" "+ this.state.lastName} />}
            <div className="page-content">
              <div className="container no-padding">
              <Switch>
                <Route exact path={this.props.match.path+"/"} component = {()=> <Overview wsID={this.state.wsID} hrID={this.state.userID}/> }/>
                <Route path={this.props.match.path+"/job/:jobID"} component = {()=> <ViewJob/> }/>
                <Route path={this.props.match.path+"/new-job"} component = {()=> <NewJob/> }/>
              </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(WorkSpace);
