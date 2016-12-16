import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import io from 'socket.io-client';
let socket = io('http://' + window.location.hostname + ':4000');

class Chatroom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMessages: [],
      msgInput: ''
    };
    this.sendMsg = this.sendMsg.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.getMessages = this.getMessages.bind(this);
  }

  componentDidMount() {
    this.getMessages();
    socket.on('msgres:msg', function(msg) {
      this.getMessages();
    }.bind(this));
  }

  getMessages() {
    socket.emit('msgreq:all');

    socket.on('msgres:all', function(msgs) {
      this.setState({
        allMessages: msgs
      });
    }.bind(this));
  }

  sendMsg(event) {
    socket.emit('msgreq:msg', this.state.msgInput);
    this.setState({
      msgInput: ''
    });
    event.preventDefault();
  }

  inputChangeHandler(event) {
    this.setState({msgInput: event.target.value});
  }

  render() {
    return (
      <div>
        <ul className="chat">
          {
            this.state.allMessages.map(function(item) {
              return <li key={item.message}>{item.username}: {item.message}</li>;
            })
          }
        </ul>
        <form onSubmit={this.sendMsg}>
          <input value={this.state.msgInput} onChange={this.inputChangeHandler}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}
export default Chatroom;