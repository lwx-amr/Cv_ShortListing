import React, { Component } from 'react'

export default class Header extends Component {
  state = {
    name: this.props.name
  }
  render() {
    return (
      <header>
        <div className="wrapper">
          <div className="title-area">
            <h1 className="heading">Overview</h1>
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
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
              <div className="image">
                <img src="/images/profiles/2.jpg" alt="" className="rounded-circle" />
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
