import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  async handleLogout() {
    const { history, userLogout } = this.props;
    await userLogout();
    history.push('/');
  }

  renderLogin() {
    return this.props.user.phoneNumber ? (
      <button onClick={this.handleLogout}>
        Logout
      </button>
    ) :
      <NavLink to="/login">Login</NavLink>;
  }

  render() {
    return (
      <header className="header">
        <div className="logo">
          <h1>txtSmart</h1>
        </div>
        <nav>
          {this.renderLogin()}
          <NavLink to="/messages">My Texts</NavLink>
          <NavLink to="/community">Community</NavLink>
        </nav>
      </header>
    );
  }
}

Header.defaultProps = {
  history: {},
  user: {},
};

Header.propTypes = {
  history: PropTypes.object,
  userLogout: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default Header;
