//Child component within HomepageApp
//Will receive the eventList in an array as a prop and will create EventListEntries for each event
import React from 'react';
import ReactDOM from 'react-dom';

import EventListEntry from './EventListEntry.jsx';

class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upcoming: [],
      completed: []
    };

    this.setGoing = this.setGoing.bind(this);
    this.setNotGoing = this.setNotGoing.bind(this);
    this.toggleGoing = this.toggleGoing.bind(this);
    this.goingResponseHandler = this.goingResponseHandler.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    //This function will sort the events in the eventList into two categories: upcoming and deleted
    //The sort logic compares the event date with the current date and checks to see if the event 
    //has already passed.
    if (nextProps.eventData) {
      var upcoming = [];
      var completed = [];
      nextProps.eventData.forEach((event) => {
        var now = new Date();
        var eventDate = new Date(event.when);
        if (eventDate >= now) {
          upcoming.push(event);
        } else {
          completed.push(event);
        }
      });
      this.setState({upcoming: upcoming, completed: completed});
    }
  }

  goingResponseHandler(data) {
    this.state.upcoming.forEach(function(event, i) {
      console.log(JSON.stringify(event), JSON.stringify(data));
      if (event.id === data.eventId) {
        console.log(this.state.upcoming[i]);
        this.state.upcoming[i].going = data.going;
        this.state.upcoming[i].goingResponded = data.goingResponded;
      }
    }.bind(this));
    this.state.completed.forEach(function(event, i) {
      console.log(JSON.stringify(event), JSON.stringify(data));
      if (event.id === data.eventId) {
        console.log(this.state.completed);
        this.state.completed[i].going = data.going;
        this.state.completed[i].goingResponded = data.goingResponded;
      }
    }.bind(this));
    this.setState({
      upcoming: this.state.upcoming,
      completed: this.state.completed
    });
  }

  setGoing(event) {
    $.ajax({
      method: 'PUT',
      url: '/api/events/people',
      data: JSON.stringify({
        eventId: event.target.dataset.id,
        userId: sessionStorage.getItem('userId'),
        changes: {
          goingResponded: true,
          going: true
        }
      }),
      contentType: 'application/json',
      success: this.goingResponseHandler
    });
  }

  setNotGoing(event) {
    $.ajax({
      method: 'PUT',
      url: '/api/events/people',
      data: JSON.stringify({
        eventId: event.target.dataset.id,
        userId: sessionStorage.getItem('userId'),
        changes: {
          goingResponded: true,
          going: false
        }
      }),
      contentType: 'application/json',
      success: this.goingResponseHandler
    });
  }

  toggleGoing(event) {
    console.log(event.target.dataset.going);
    $.ajax({
      method: 'PUT',
      url: '/api/events/people',
      data: JSON.stringify({
        eventId: event.target.dataset.id,
        userId: sessionStorage.getItem('userId'),
        changes: {
          goingResponded: true,
          going: event.target.dataset.going === 'false'
        }
      }),
      contentType: 'application/json',
      success: this.goingResponseHandler
    });
  }

  render() {
    return (
      <div>
        <div className='featureBody' id='upcoming'> 
          <h2>Upcoming Events</h2>
          {this.state.upcoming.map((event, index) => {
            return ( 
              <EventListEntry 
                key={index} event={event} 
                handleEntryClick={this.props.handleEntryClick}
                setGoing={this.setGoing}
                setNotGoing={this.setNotGoing}
                toggleGoing={this.toggleGoing}
              />
            );
          })}
        </div>
        <div className='featureBody' id='completed'> 
          <h2>Completed Events</h2>
            {this.state.completed.map((event, index) => {
              return ( 
                <EventListEntry 
                  key={index} event={event} 
                  handleEntryClick={this.props.handleEntryClick}
                  setGoing={this.setGoing}
                  setNotGoing={this.setNotGoing}
                  toggleGoing={this.toggleGoing}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default EventList;