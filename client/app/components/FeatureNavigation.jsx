//Child component within the Event Planning component
//Allows user to navigate between the event planning details
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

var FeatureNavigation = (props) => (
  <div id="eventNav">
    <div id="eventNav-sub">
      <Link to='people' className="button">People</Link>
      <Link to='what-to-bring' className="button wtbBtn">What To Bring</Link>
      <Link to='reminders' className="button reminderBtn">Reminders</Link>
      <Link to='photos' className="button photosBtn">Photos</Link>
      <Link to='chat' className="button chatBtn">Chatroom (IP)</Link>    
    </div>
  </div>
);

export default FeatureNavigation;