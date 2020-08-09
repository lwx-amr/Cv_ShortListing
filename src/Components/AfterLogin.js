import React, { Component } from 'react'
import {Route, Switch, withRouter} from "react-router-dom";

// Components
import WSList from "./workspace/WSList";
import NewWorkSpace from "./workspace/NewWorkSpace";
import WorkSpace from "./workspace/WorkSpace";

// API Calls
import {createWorkSpace} from "../Utils/workSpaceCalls";

class AfterLogin extends Component {
  state = {
    user: this.props.user.user
  }
  handleNewWorkSpace = (name, emails) => {
    if(createWorkSpace(name, emails, this.state.user._id)){
      this.props.history.push('/ws-list/'+this.state.user._id);
    }
  }
  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/workspace/:wsID" 
            component={() => <WorkSpace user={this.state.user}/>}  
          />
          <Route exact path="/ws-list/:userID" component = {WSList} />
          <Route
            path="/new-workspace" 
            component={() => <NewWorkSpace new_ws={this.handleNewWorkSpace} />}  
          />
          
        </Switch>
      </div>
    )
  }
}
export default withRouter(AfterLogin);