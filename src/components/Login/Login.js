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

  async handleSubmit(event) {
    const { history, userLogin } = this.props;
    const user = this.state;
    const formattedNumber = `+1${user.phoneNumber}`;
    user.phoneNumber = formattedNumber;

    event.preventDefault();
    await userLogin(user);
    history.push('/messages');
  }

  render() {
    const { phoneNumber, password } = this.state;
    const { user } = this.props;

    return (
      <section className="form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-inputs">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              name="phoneNumber"
              value={phoneNumber}
              onChange={this.handleChange}
              className="form-input"
            />
            <label htmlFor="password-login">Password</label>
            <input
              id="password-login"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className="form-input"
            />
          </div>
          <input
            type="submit"
            className="submit"
          />
        </form>
        {user !== {} &&
        <div className="signin-link">
          <p>Don&apos;t have an account? </p>
          <Link to="/signup" replace>Signup</Link>
        </div>}
      </section>
    );
  }
}

Login.defaultProps = {
  user: { },
};

Login.propTypes = {
  user: PropTypes.object,
  userLogin: PropTypes.func.isRequired,
};

export default Login;
