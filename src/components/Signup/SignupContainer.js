import { connect } from 'react-redux';
import { userSignup } from '../../actions';
import Signup from './Signup';

const mapDispatchToProps = dispatch => (
  {
    userSignup: user => dispatch(userSignup(user)),
  }
);

export default connect(null, mapDispatchToProps)(Signup);
