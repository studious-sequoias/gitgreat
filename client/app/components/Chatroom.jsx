import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import io from 'socket.io-client';
let socket = io('http://' + window.location.hostname + ':4000');

class Chatroom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMessages: [],
      eventId: null,
      userId: null,
      msgInput: ''
    };
    this.getMessages = this.getMessages.bind(this);
    this.callback = this.callback.bind(this);
    console.log('params', JSON.stringify(this.props.params));
  }

  componentDidMount() {
    this.getMessages();
  }
  componentWillMount() {
    this.setState({
      userId: sessionStorage.getItem('userId'),
      eventId: sessionStorage.getItem('eventId') || 1 //INSERT EVENT ID HERE
    });
  }


  componentWillUnmount() {
    socket.removeListener('msgres:all', this.callback);
  }

  getMessages() {
    socket.emit('msgreq:all', this.state.eventId);
    socket.on('msgres:all', this.callback);
  }

  callback(msgs) { //listener event that will be unmounted when leaving the page
    this.setState({
      allMessages: msgs
    });
  }

  sendMsg(event) {
    var message = {
      userId: this.state.userId,
      eventId: this.state.eventId,
      message: this.state.msgInput
    };
    socket.emit('msgreq:msg', message);
    this.setState({
      msgInput: ''
    });
    event.preventDefault();

    socket.on('msgres:msg', function(msg) {
      this.getMessages();
    }.bind(this));
  }

  inputChangeHandler(event) {
    this.setState({msgInput: event.target.value});
  }

  render() {
    return (
      <div className="chatContainer">
        <ul className="chat">
          {
            this.state.allMessages.map(function(item, index) {
              return <li key={index}>{item.username}: {item.message}</li>;
            })
          }
        </ul>
        <form onSubmit={this.sendMsg.bind(this)}>
          <input value={this.state.msgInput} onChange={this.inputChangeHandler.bind(this)}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}
export default Chatroom;