import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '..//Header/Header';
import LoginContainer from '../Login/LoginContainer';
import SignupContainer from '../Signup/SignupContainer';


class App extends Component {
  componentDidUpdate(prevProps) {
    // const { dispatch, redirectUrl } = this.props;
    const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn;
    const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn;

    if (isLoggingIn) {
      // dispatch(navigateTo(redirectUrl));
    } else if (isLoggingOut) {
      // Cleanup cookie on logout ect.
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Route path="/login" component={LoginContainer} />
        <Route path="/signup" component={SignupContainer} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.loggedIn,
    redirectUrl: state.redirectUrl,
  };
}

export default connect(mapStateToProps, null)(App);
