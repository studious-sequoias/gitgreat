//Child component within the Event Planning component
//Allows user to navigate between the event planning details
import React from 'react';
import ReactDOM from 'react-dom';

var FeatureNavigation = (props) => (
  <div id="eventNav">
    <button href='#' className="wtbBtn" id="firstBtn" value="whatToBringBtn" onClick={(e) => props.changeDisplay(e)}>What To Bring</button>
    <button href='#' className="reminderBtn" value="reminderBtn" onClick={(e) => props.changeDisplay(e)}>Reminders</button>
    <button href='#' className="photosBtn" value="photosBtn" onClick={(e) => props.changeDisplay(e)}>Photos</button>
    <button href='#' className="chatBtn" value="chatBtn" onClick={(e) => props.changeDisplay(e)}>Chatroom (IP)</button>    
  </div>
);

export default FeatureNavigation;