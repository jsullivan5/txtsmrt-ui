import { connect } from 'react-redux';
import Login from './Login';
import { userLogin } from '../../actions';

const mapStateToProps = ({ user }) => (
  user
);

const mapDispatchToProps = dispatch => (
  {
    userLogin: user => dispatch(userLogin(user)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
