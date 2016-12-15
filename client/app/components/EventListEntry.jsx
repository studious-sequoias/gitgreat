//Child component within EventList (contained within HomepageApp)
import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';

var EventListEntry = (props) => (
  <div className="listEntry" onClick={() => {
    browserHistory.event = props.event;
    browserHistory.push('event/' + props.event.id);
  }}>
    <strong>{props.event.name}</strong><br />
    Location: {props.event.where}<br />
    Time: {props.event.when}<br />
  </div>
);

export default EventListEntry;