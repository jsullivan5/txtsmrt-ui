import { connect } from 'react-redux';
import App from './App';
import { getUser } from '../../actions';

const mapStateToProps = state => (
  {
    isLoggedIn: state.loggedIn,
    redirectUrl: state.redirectUrl,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getUser: user => dispatch(getUser(user)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
