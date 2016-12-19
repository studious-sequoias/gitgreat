//Child component within EventList (contained within HomepageApp)
import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';

var EventListEntry = (props) => (
  <div>
    <div className="listEntry" onClick={() => {
      // browserHistory.event = props.event;
      browserHistory.push('event/' + props.event.id + '/');
    }}>
      <strong>{props.event.name}</strong><br />
      Location: {props.event.where}<br />
      Time: {props.event.when}<br />
    </div>
    <div>
      Going:
      {!props.event.goingResponded && <button data-id={props.event.id} onClick={props.setGoing}>Yes</button>}
      {!props.event.goingResponded && <button data-id={props.event.id} onClick={props.setNotGoing}>No</button>}
      {!!props.event.goingResponded && <span>{props.event.going ? 'Yes' : 'No'}</span>}
      {!!props.event.goingResponded && <button data-id={props.event.id} data-going={props.event.going} onClick={props.toggleGoing}>Change</button>}
    </div>
  </div>
);

export default EventListEntry;