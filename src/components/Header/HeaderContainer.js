import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import { userLogout } from '../../actions';

const mapStateToProps = ({ user }) => (
  {
    user,
  }
);

const mapDispatchToProps = dispatch => (
  {
    userLogout: () => dispatch(userLogout()),
  }
);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header));
