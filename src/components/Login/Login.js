import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      phoneNumber: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    const user = this.state;
    event.preventDefault();
    this.props.userLogin(user);
  }

  render() {
    const { phoneNumber, password } = this.state;

    return (
      <section className="login">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="phone">
            Phone Number
            <input
              id="phone"
              type="tel"
              name="phoneNumber"
              value={phoneNumber}
              onChange={this.handleChange}
              className="form-input"
            />
          </label>
          <label htmlFor="password-login">
            Password
            <input
              id="password-login"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className="form-input"
            />
          </label>
          <input
            type="submit"
            className="submit"
          />
        </form>
        <p>Don&apos;t have an account? </p>
        <Link to="/signup" replace>Signup</Link>
      </section>
    );
  }
}

Login.propTypes = {
  userLogin: PropTypes.func.isRequired,
};

export default Login;
