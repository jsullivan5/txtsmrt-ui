import React, { Component } from 'react';

const handleSubmit = (event) => {
  event.preventDefault();
  console.log('Button click');
};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
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
    const { userName, password } = this.state;

    return (
      <section className="login">
        <form>
          <input
            type="text"
            name="userName"
            value={userName}
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
            onCLick={handleSubmit}
          />
        </form>
      </section>
    );
  }
}

export default Login;
