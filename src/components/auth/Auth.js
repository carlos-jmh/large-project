
import React, { useState } from "react"

import './auth.css'

import { Auth as CognitoAuth } from 'aws-amplify';

function Auth(props) {
  const [authMode, setAuthMode] = useState(props.auth);
  const [formInput, setFormInput] = useState({ username: '', password: '', email: '', verificationCode: '' })

  const onFormChange = (event) => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  }

  const signUpUser = async () => {
    try {
      await CognitoAuth.signUp({
        username: formInput.username,
        password: formInput.password,
        attributes: {
          email: formInput.email
        }
      });
      setAuthMode("confirmSignUp");
    } catch (error) {
      console.log(error);
    }
  }

  const signInUser = async () => {
    try {
      await CognitoAuth.signIn(formInput.username, formInput.password);

      setAuthMode("signedIn");
    } catch (error) {
      console.log(error);
    }
  }

  const confirmUserSignUp = async () => {
    try {
      console.log(formInput.username);
      await CognitoAuth.confirmSignUp(formInput.username, formInput.verificationCode);
      setAuthMode("confirmedSignUp");
    } catch (error) {
      console.log(error);
    }
  }

  const signOutUser = async () => {
    try {
      await CognitoAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  }

  const forgotPassword = async() => {
    try {
      console.log(formInput.email);
    } catch (error) {
      console.log(error);
    }
  }

  if (authMode === "signIn") {
    return (
      <div className="signinContainer">
        <div className="form">
          <div className="form-content">
            <h3 className="form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={() => setAuthMode("signUp")}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Username</label>
              <input
                name="username"
                type="username"
                className="form-control mt-1"
                placeholder="Enter username"
                onChange={ onFormChange }
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                name="password"
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={ onFormChange }
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button className="btn btn-primary" onClick={ signInUser }>
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a onClick={() => setAuthMode("forgotPassword")}>password?</a>
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (authMode === "signUp") {
    return (
      <div className="signupContainer">
        <div className="form">
          <div className="form-content">
            <h3 className="form-title">Sign Up</h3>
            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary" onClick={() => setAuthMode("signIn")}>
                Sign In
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Username</label>
              <input
                name="username"
                type="username"
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
                onChange={ onFormChange }
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                name="email"
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
                onChange={ onFormChange }
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                name="password"
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                onChange={ onFormChange }
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button className="btn btn-primary" onClick={ signUpUser }>
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a onClick={() => setAuthMode("forgotPassword")}>password?</a>
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (authMode === "forgotPassword") {
    return (
      <div className="forgotPasswordContainer">
        <div className="form">
          <div className="form-content">
            <h3 className="form-title">Forgot Password</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                name="email"
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
                onChange={ onFormChange }
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button className="btn btn-primary" onClick={ forgotPassword }>
                Submit
              </button>
            </div>
            <div className="text-center">
              Remember your password?{" "}
              <span className="link-primary" onClick={() => setAuthMode("signIn")}>
                Sign In
              </span>
            </div>
            <div className="text-center">
              Not yet registered?{" "}
              <span className="link-primary" onClick={() => setAuthMode("signUp")}>
                Sign Up
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (authMode === "confirmSignUp") {
    return (
      <div>
        <p>CONFIRM SIGN UP PAGE</p>

        <input
          name="verificationCode"
          className="form-control mt-1"
          placeholder="Code"
          onChange={ onFormChange }
        />

        <button className="btn btn-primary" onClick={ confirmUserSignUp }>
          Submit
        </button>
      </div>
    )
  }

  if (authMode === "confirmedSignUp") {
    window.location.href = "/dashboard"
  }

  if (authMode === "signedIn") {
    window.location.href = "/dashboard"
  }
}

export default Auth;
