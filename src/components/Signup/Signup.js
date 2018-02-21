import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Signup.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      passwordConf: '',
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
    const formattedNumber = `+1${user.phoneNumber}`;
    user.phoneNumber = formattedNumber;
    event.preventDefault();
    this.props.userSignup(user);
  }

  render() {
    const { user } = this.props;
    const {
      phoneNumber,
      firstName,
      lastName,
      email,
      password,
      passwordConf,
    } = this.state;

    return (
      <section className="form-container">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="phone-signup">
            Phone Number
            <input
              id="phone-signup"
              type="tel"
              name="phoneNumber"
              value={phoneNumber}
              onChange={this.handleChange}
              className="form-input"
            />
          </label>
          <label htmlFor="first-name">
            First Name
            <input
              id="first-name"
              type="text"
              name="firstName"
              value={firstName}
              onChange={this.handleChange}
              className="form-input"
            />
          </label>
          <label htmlFor="last-name">
            Last Name
            <input
              id="last-name"
              type="text"
              name="lastName"
              value={lastName}
              onChange={this.handleChange}
              className="form-input"
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className="form-input"
            />
          </label>
          <label htmlFor="password-signup">
            Password
            <input
              id="password-signup"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className="form-input"
            />
          </label>
          <label htmlFor="password-conf">
            Confirm Password
            <input
              id="password-conf"
              type="password"
              name="passwordConf"
              value={passwordConf}
              onChange={this.handleChange}
              className="form-input"
            />
          </label>
          <input
            type="submit"
            className="submit"
          />
        </form>
        {!user &&
        <div>
          <p>Already have an account?</p>
          <Link to="/login" replace>Login</Link>
        </div>}
      </section>
    );
  }
}

Signup.defaultProps = {
  user: { },
};

Signup.propTypes = {
  user: PropTypes.object,
  userSignup: PropTypes.func.isRequired,
};

export default Signup;
