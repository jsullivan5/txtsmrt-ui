import { connect } from 'react-redux';
import Header from './Header';
import { userLogout } from '../../actions';

const mapDispatchToProps = dispatch => (
  {
    userLogout: () => dispatch(userLogout()),
  }
);

export default connect(null, mapDispatchToProps)(Header);
