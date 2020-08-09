import React, { Component } from 'react'

import { Link } from "react-router-dom";

import {getWorkSpace} from "../../Utils/workSpaceCalls";

export default class Header extends Component {
  state = {
    name: this.props.name,
    wsName: this.props.wsName,
    wsID: this.props.wsID
  }
  componentDidMount(){
    getWorkSpace(this.state.wsID)
      .then(ws => {
        this.setState({
          wsName: ws.name,
        })
      });
  }
  render() {
    return (
      <header>
        <div className="wrapper">
          <div className="title-area">
            <h1 className="heading">{this.state.wsName}</h1>
          </div>
          <div className="rest-part">
            <div className="icons">
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <img src="/icons/notifications.svg" alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <span className="deli" />
            <div className="media">
              <div className="media-body">
                <h6>{this.state.name}</h6>
                <div className="dropdown">
                  <span id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="/icons/down-arrow.svg" alt="" />
                  </span>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link className="dropdown-item" to="/logout">Logout</Link>
                  </div>
                </div>
              </div>
              <div className="image">
                <img src="/images/profiles/21294.png" alt="" className="rounded-circle" />
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
