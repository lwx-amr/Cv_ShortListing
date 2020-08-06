import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Signup extends Component {
    state = {
        email: '',
        password: '',
        invalidEmail: false,
        emptyPassword: false,
        registerFailed: false,
        errMsg: ''
    }
    render() {
        return (
            <div className="access signup">
                <div className="page-content">
                    <div className="access-box">
                        <div className="row">
                        <div className="col-md-5">
                            <div className="left-box">
                            <div className="logo image">
                                <img src="images/white-logo.svg" alt="" />
                            </div>
                            <div className="girl image">
                                <img src="images/girl.svg" alt="" />
                            </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="right-box">
                                <div className="box-head">
                                    <h5>Welcome to Rank UP, Setup your profile</h5>
                                </div>
                                <div className="box-body">
                                    <form className="register-form" action="index.html" method="post">
                                    <div className="form-inputs">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-group">
                                                <label htmlFor="fname">First Name <span className="req-mark">*</span></label>
                                                <input type="text" className="form-control" name="fname" id="fname" required />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                <label htmlFor="lname">Last Name <span className="req-mark">*</span></label>
                                                <input type="text" className="form-control" name="lname" id="lname" required />
                                                </div>
                                            </div>
                                            </div>
                                            <div className="form-group">
                                            <label htmlFor="email">Email <span className="req-mark">*</span></label>
                                            <input type="email" className="form-control" name="email" id="email" required />
                                            </div>
                                            <div className="form-group password">
                                            <label htmlFor="password">Password <span className="req-mark">*</span></label>
                                            <input type="password" className="form-control" name="password" id="password" required />
                                            <span className="rp-eye js-ShowPass" />
                                            </div>
                                            <div className="form-group">
                                            <label>By clicking below, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
                                            </div>
                                        </div>
                                        <div className="box-footer">
                                            <input type="submit" defaultValue="Create account" className="btn btn-bBlue" />
                                            <p>Already have account? <Link to="/login">Login</Link></p>
                                        </div>
                                    </form>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}