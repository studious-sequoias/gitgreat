//Child component within the Event Planning component
//Allows user to navigate between the event planning details
import React from 'react';
import ReactDOM from 'react-dom';

var FeatureNavigation = (props) => (
  <div id="eventNav">
    <link to='what-to-bring' >What To Bring</link>
    <link to='reminders' >Reminders</link>
    <link to='photos' >Photos</link>
    <link to='chat' >Chatroom (IP)</link>    
  </div>
);

export default FeatureNavigation;