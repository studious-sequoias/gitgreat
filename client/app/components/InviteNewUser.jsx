import React from 'react';
import ReactDOM from 'react-dom';

var InviteNewUser = (props) => (
  <div>
    <p>I don't know {props.person}.  How do I reach them?</p>
    <input placeholder="Phone Number" onChange={props.changeNumber}/>
    <input placeholder="Email" onChange={props.changeEmail}/>
    <button onClick={props.invite}>Invite</button>
    <button onClick={props.cancel}>Cancel</button>
  </div>
);


export default InviteNewUser;
