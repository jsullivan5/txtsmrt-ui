import React, { Component } from 'react';

const handleSubmit = (event) => {
  event.preventDefault();
  console.log('Button click');
};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      phoneNumber: '',
      email: '',
      firstName: '',
      lastName: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const {
      phoneNumber,
      firstName,
      lastName,
      email,
      password,
    } = this.state;

    return (
      <section className="signup">
        <form onSubmit={handleSubmit}>
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
            type="submit"
            className="submit"
          />
        </form>
      </section>
    );
  }
}

export default Login;
