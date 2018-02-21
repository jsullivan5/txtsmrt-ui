import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderContainer from '..//Header/HeaderContainer';
import LoginContainer from '../Login/LoginContainer';
import SignupContainer from '../Signup/SignupContainer';
import MessageContainer from '../MessageConsole/MessageContainer';

class App extends Component {
  componentDidMount() {
    if (document.cookie) {
      this.props.getUser();
    }
  }

  // componentDidUpdate(prevProps) {
  //   // const { dispatch, redirectUrl } = this.props;
  //   const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn;
  //   const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn;
  //
  //   if (isLoggingIn) {
  //     // dispatch(navigateTo(redirectUrl));
  //   } else if (isLoggingOut) {
  //     document.cookie = 'connect.sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  //   }
  // }

  render() {
    return (
      <div>
        <HeaderContainer />
        <Route path="/login" component={LoginContainer} />
        <Route path="/signup" component={SignupContainer} />
        <Route path="/messages" component={MessageContainer} />
      </div>
    );
  }
}

App.propTypes = {
  getUser: PropTypes.func.isRequired,
};

export default App;
