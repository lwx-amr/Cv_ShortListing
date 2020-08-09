import React, { Component } from 'react'

import {getJob} from "./../../Utils/jobsCalls";

export default class ViewJob extends Component {
  state = {
    jobID : '',
    name: '',
    date: '',
    stat: '',
    numOfApplicants: '',
    description: '',
    skills: ''
  }
  componentDidMount(){
    console.log(this.props);
  }
  render() {
    return (
      <div className="main-page dashboard">
        <div className="viewjob">
          <div className="content-side clearfix">
            {/* Start Content */}
            <div className="page-content">
              <div className="container no-padding">
                <div className="jobs-details">
                  <div className="jobs-head">
                    <div className="title">
                      <h3>Software Engineer</h3>
                      <span>May 25, 2020</span>
                    </div>
                    <div className="state">
                      <span className="active">active</span>
                      <div className="more">
                        <span id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <img src="/icons/more-vertical.svg" alt="" />
                        </span>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <button className="dropdown-item" data-toggle="modal" data-target="#editJob">Edit job</button>
                          <button className="dropdown-item" data-toggle="modal" data-target="#confirmModal">Delete job</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="applicants">
                    <h5>Number of applicants: <span>205</span></h5>
                  </div>
                  <div className="description">
                    <h4>Description</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>
                <div className="next-action">
                  <a href="#" className="btn btn-bBlue">Close and Start Ranking</a>
                </div>
              </div>
            </div>
            {/* End Content */}
          </div>
          {/* End Right Side */}
        </div>
        <div className="modal fade confirm" id="confirmModal" tabIndex={-1} role="dialog" aria-labelledby="confirmModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="confirmModalLabel">Please confirm the following action</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <p>This action will delete this job with all its data</p>
              </div>
              <div className="modal-footer">
                <a type="button" className="btn btn-delete" href="/job/delete/">Delete</a>
                <button type="button" className="btn btn-close" data-dismiss="modal">Cancel</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade edit" id="editJob" tabIndex={-1} role="dialog" aria-labelledby="editJobLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h6 className="modal-title" id="editJobLabel">Edit job</h6>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form action="index.html" method="post" id="edit-video-form">
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label htmlFor="title">Job title</label>
                        <input type="text" name="title" id="title" className="form-control req-input" defaultValue="Software Engineer" required />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label htmlFor="state">Job status</label>
                        <select className="form-control" name="state" id="state" required>
                          <option value="active">Active</option>
                          <option value="hold">Hold</option>
                          <option value="closed">Closed</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description" rows={8} className="form-control req-input" defaultValue={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                    "} />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <a type="button" className="btn btn-save" href="/job/delete/">Save</a>
                <button type="button" className="btn btn-close" data-dismiss="modal">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    )
  }
}