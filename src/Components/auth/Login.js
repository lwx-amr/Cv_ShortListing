import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Login extends Component {
    state = {
        email: '',
        password: '',
        invalidEmail: false,
        emptyPassword: false,
        loginFailed: false,
        errMsg: ''
    }
    render() {
        return (
            <div className="access signin">
                <div className="page-content">
                    <div className="page-head">
                        <div className="logo">
                        <img src="images/blue-logo.svg" alt="" />
                        </div>
                        <p>Welcome to Rank UP, please login to continue</p>
                    </div>
                    <div className="access-box">
                        <div className="box-body">
                        <div className="error-notice" id="error-notice">
                            <p>Error in email or password</p>
                        </div>
                        <form className="login" action="index.html" id="loginForm" method="post">
                            <div className="form-group">
                            <label htmlFor="username">Email</label>
                            <input type="text" name="email" id="email" className="form-control req-input" defaultValue />
                            </div>
                            <div className="form-group password">
                            <label htmlFor="password">Password <Link to="/forget-password" className="link">Forgot Password?</Link> </label>
                            <input type="password" name="password" id="password" className="form-control req-input" defaultValue />
                            <span className="rp-eye js-ShowPass" />
                            </div>
                            <button type="button" name className="btn btn-bBlue" onclick="validateForm(loginForm)">Sign in</button>
                        </form>
                        </div>
                    </div>
                    <div className="page-footer text-center">
                        <p>Don’t have account? <Link to="/signup">Register now</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}