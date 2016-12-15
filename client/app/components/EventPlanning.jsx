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
    this.state = {
      tab: false
    };

    this.changeDisplay = this.changeDisplay.bind(this);
  }

  changeDisplay(e) {
    this.setState({
      tab: e.target.value
    });
  }

  render() {
    var view;
    // if (this.state.tab === 'whatToBringBtn') {
    //   view = <WhatToBring featuredEvent={browserHistory.event}/>;
    // } else if (this.state.tab === 'activitiesBtn') {
    //   view = <Activities />;
    // } else if (this.state.tab === 'reminderBtn') {
    //   view = <Reminders featuredEvent={browserHistory.event}/>;
    // } else if (this.state.tab === 'photosBtn') {
    //   view = <Photos uploadFile={this.uploadFile} />;
    // }
    return (
      <div>
        <Nav />
        <h1 className="eventHeader">{browserHistory.event.name} | {browserHistory.event.where} | {browserHistory.event.when}</h1>
        <FeatureNavigation changeDisplay={this.changeDisplay} />
        {this.props.children}
      </div>
    );
  }
}
export default EventPlanning;