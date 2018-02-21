import { connect } from 'react-redux';
import { userSignup } from '../../actions';
import Signup from './Signup';

const mapStateToProps = ({ user }) => (
  user
);

const mapDispatchToProps = dispatch => (
  {
    userSignup: user => dispatch(userSignup(user)),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);
