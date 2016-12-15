//Child component within the Event Planning component
//Allows user to navigate between the event planning details
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

var FeatureNavigation = (props) => (
  <div id="eventNav">
    <Link to='/what-to-bring' >What To Bring</Link>
    <Link to='/reminders' >Reminders</Link>
    <Link to='/photos' >Photos</Link>
    <Link to='/chat' >Chatroom (IP)</Link>    
  </div>
);

export default FeatureNavigation;