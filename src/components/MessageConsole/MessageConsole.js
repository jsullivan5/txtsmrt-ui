import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MessageConsole extends Component {
  constructor(props) {
    super(props);
    this.renderMessages = this.renderMessages.bind(this);
  }
  componentDidMount() {
    if (document.cookie) {
      this.props.getAllMessages();
    }
  }

  renderMessages() {
    const { messages } = this.props;

    if (messages.length) {
      return messages.map(message => (
        <div key={message.smsId}>
          <p>{message.text}</p>
        </div>
      ));
    }
    return null;
  }

  render() {
    console.log('THE MESSAGES: ', this.props.messages);
    const messages = this.renderMessages();

    return (
      <section>
        {messages}
      </section>
    );
  }
}

MessageConsole.defaultProps = {
  messages: [],
};

MessageConsole.propTypes = {
  getAllMessages: PropTypes.func.isRequired,
  messages: PropTypes.array,
};

export default MessageConsole;
