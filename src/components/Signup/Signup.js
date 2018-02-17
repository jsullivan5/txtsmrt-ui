import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    event.preventDefault();
    this.props.userSignup(user);
  }

  render() {
    const {
      phoneNumber,
      firstName,
      lastName,
      email,
      password,
      passwordConf,
    } = this.state;

    return (
      <section className="signup">
        <form onSubmit={this.handleSubmit}>
          <input
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            onChange={this.handleChange}
            className="form-input"
          />
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
            className="form-input"
          />
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
            className="form-input"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            className="form-input"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            className="form-input"
          />
          <input
            type="password"
            name="passwordConf"
            value={passwordConf}
            onChange={this.handleChange}
            className="form-input"
          />
          <input
            type="submit"
            className="submit"
          />
        </form>
      </section>
    );
  }
}

Signup.defaultProps = {
  userSignup: f => f,
};

Signup.propTypes = {
  userSignup: PropTypes.func,
};

export default Signup;
