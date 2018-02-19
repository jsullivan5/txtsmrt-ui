import React, { Component } from 'react';
import './Login.css';

const handleSubmit = (event) => {
  event.preventDefault();
  console.log('Button click');
};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      phoneNumber: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { phoneNumber, password } = this.state;

    return (
      <section className="login">
        <form onSubmit={handleSubmit}>
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
      </section>
    );
  }
}

export default Login;
