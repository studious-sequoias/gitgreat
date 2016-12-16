import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import PeopleListEntry from './PeopleListEntry.jsx';

class PeopleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [{name: 'Casey'}],
      person: ''
    };

    this.changeName = this.changeName.bind(this);
    this.invitePerson = this.invitePerson.bind(this);
  }

  componentWillMount() {
    $.ajax({
      method: 'GET',
      url: '/api/events/id/1/people',
      success: function(data) {
        if (data) {
          this.setState({
            people: data
          });
        }
      }.bind(this)
    });
  }

  invitePerson() {

    var inviteResponseHandler = function(person, invite) {
      if (invite) {
        this.state.people.push(person);
        this.setState({people: this.state.people});
      }
    };

    var sendInvite = function(person) {
      $.ajax({
        method: 'POST',
        url: '/api/events/people',
        data: JSON.stringify({
          eventId: 1,
          userId: person.id
        }),
        contentType: 'application/json',
        success: inviteResponseHandler.bind(this, person)
      });
    }.bind(this);

    var createNewUser = function() {
      $.ajax({
        method: 'POST',
        url: '/api/users',
        data: JSON.stringify({
          name: this.state.person
        }),
        contentType: 'application/json',
        success: sendInvite.bind(this)
      });
    };

    var lookupHandler = function(person) {
      if (person) {
        sendInvite(person);
      } else {
        createNewUser.call(this);
      }
    };

    //Lookup user by name
    $.ajax({
      method: 'GET',
      url: '/api/users/name/' + this.state.person,
      success: lookupHandler.bind(this)
    });
  }

  changeName(event) {
    this.setState({person: event.target.value});
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Name" onChange={this.changeName.bind(this)}/>
        <button onClick={this.invitePerson}>Invite person</button>
        <h2>Invited:</h2>
        {this.state.people.map( (person, i) => {
          return (
            <PeopleListEntry key={i} person={person} />
          );
        })}
      </div>
    );
  }
}

export default PeopleList;