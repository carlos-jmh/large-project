
import React, { useState } from "react"

import { Auth as CognitoAuth } from 'aws-amplify';

function Auth(props) {
  const [authMode, setAuthMode] = useState(props.auth);
  const [formInput, setFormInput] = useState({ username: '', password: '', email: '', verificationCode: '' })

  const onFormChange = (event) => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  }

  const signUpUser = async () => {
    try {
      console.log("signing up!");
      await CognitoAuth.signUp({
        username: formInput.username,
        password: formInput.password,
        attributes: {
          email: formInput.email
        }
      });
      console.log("signed up!");
      setAuthMode("confirmSignUp");
    } catch (error) {
      console.log(error);
    }
  }

  const signInUser = async () => {
    try {
      console.log("signing in!");
      await CognitoAuth.signIn(formInput.username, formInput.password);
      console.log("signed in!");

      console.log(formInput);
    
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

  if (authMode === "signIn") {
    return (
      <div className="Auth-form-container1">
        <div className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
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
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (authMode === "signUp") {
    return (
      <div className="Auth-form-container2">
        <div className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
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
              Forgot <a href="#">password?</a>
            </p>
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
    return (
      <div>
        <p>Confirmed: { formInput.email }</p>
      </div>
    )
  }

  if (authMode === "signedIn") {
    return (
      <div>
        <p>You are signed in: { formInput.username }</p>
      </div>
    )
  }
}

export default Auth;
