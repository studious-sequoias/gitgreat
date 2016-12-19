//Child component contained within HomepageApp
//Contains the event planning navigation bar
import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './Nav.jsx';
import WhatToBring from './WhatToBring.jsx';
import Activities from './Activities.jsx';
import Reminders from './Reminders.jsx';
import Photos from './Photos.jsx';
import FeatureNavigation from './FeatureNavigation.jsx';
import {browserHistory} from 'react-router';

class EventPlanning extends React.Component {
  constructor(props) {
    super(props);
    if (browserHistory.event) {
      var event = browserHistory.event;
    } else {
      var event = {
        id: 0,
        name: 'test',
        where: 'default',
        when: 'whenver'
      };
    }
    this.state = {
      event: event
    };
  }

  // componentWillMount() {
  //   var eventId = this.props.params.eventId;
  //   //Get event info from server and update state
  // }

  render() {
    return (
      <div>
        <Nav />
        <FeatureNavigation/>
        {this.props.children}
      </div>
    );
  }
}
export default EventPlanning;