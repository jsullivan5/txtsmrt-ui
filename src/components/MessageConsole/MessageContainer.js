import { connect } from 'react-redux';
import MessageConsole from './MessageConsole';
import { getAllMessages } from '../../actions';

const mapStateToProps = ({ messages }) => (
  {
    messages,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getAllMessages: () => dispatch(getAllMessages()),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageConsole);
