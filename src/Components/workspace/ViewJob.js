import React, { Component } from 'react'

import {Switch, Route, withRouter} from "react-router-dom";

import {getJob, deleteJob, updateJob} from "./../../Utils/jobsCalls";

import JobDisplay from './smallComponents/JobDisplay';
import JobRanked from "./JobRanked";

class ViewJob extends Component {
  state = {
    job: ''
  }
  componentDidMount(){
    getJob(this.props.match.params.jobID)
      .then(data => {
        this.setState({job:data});
      });
  }
  handleDelete = () => {
    deleteJob(this.state.job._id)
      .then(data => this.props.history.push('/workspace/'+this.state.job.wsID));
  }
  handleUpdate = (flag = 0) => {
    updateJob(this.state.job)
      .then(data => this.props.history.push(this.props.match.url));
  }
  handleChange = (e) => {
    let newJob = this.state.job;
    newJob[e.target.id] = e.target.value;
    this.setState({job: newJob});
  }
  handleRank = async(e) => {
    let newJob = this.state.job;
    newJob['stat'] = 'closed';
    this.setState({job: newJob});
    updateJob(this.state.job)
      .then(data => this.props.history.push(this.props.match.url+'/ranking'));
  } 
  render() {
    const job = this.state.job;
    const states = ['active', 'hold', 'closed'];
    const statesOptions = states.map(stat => {
      if(stat !== job.stat){
       return(
          <option value={stat}>{stat}</option>
        )
      }
    }); 
    return (
      <div className="main-page dashboard">
        <div className="viewjob">
          <div className="content-side clearfix">
            <div className="page-content">
              <div className="container no-padding">
                {
                  <Switch>
                    <Route exact path={this.props.match.path + "/"} 
                        component={() => <JobDisplay job={job} handleRank={this.handleRank}/>}
                    />
                    <Route path={this.props.match.path + "/ranking"} 
                        component={() => <JobRanked job={job}/>}
                    />
                  </Switch>
                }
              </div>
            </div>
          </div>
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
                <button type="button" className="btn btn-delete"  data-dismiss="modal" onClick={this.handleDelete}>Delete</button>
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
                        <input type="text" name="title" id="title" className="form-control req-input" value={this.state.job.title} required onChange={this.handleChange}/>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label htmlFor="stat">Job status</label>
                        <select className="form-control" name="stat" id="stat" required onChange={this.handleChange}>
                          <option value={this.state.job.stat}>{this.state.job.stat}</option>
                          {statesOptions}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description" rows={8} className="form-control req-input" value={this.state.job.description} onChange={this.handleChange}/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="skills">Skills</label>
                        <textarea name="skills" id="skills" rows={2} className="form-control req-input" value={this.state.job.skills} onChange={this.handleChange}/>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-save" data-dismiss="modal" onClick={this.handleUpdate}>Save</button>
                <button type="button" className="btn btn-close" data-dismiss="modal">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ViewJob);