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

  addPerson() {
    console.log('Adding', this.state.person);
    var insertHandler = function(person, invite) {
      console.log('inserted:', invite);
      if (invite) {
        this.state.people.push(person);
        this.setState({people: this.state.people});
        console.log(person.name, 'has been invited');
      }
    };

    var lookupHandler = function(person) {
      if (person) {
        $.ajax({
          method: 'POST',
          url: '/api/events/people',
          data: JSON.stringify({
            eventId: 1,
            userId: person.id
          }),
          contentType: 'application/json',
          success: insertHandler.bind(this, person)
        });
      } else {
        //Insert User
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
    console.log(event.target.value);
    this.setState({person: event.target.value});
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Name" onChange={this.changeName.bind(this)}/>
        <button onClick={this.addPerson.bind(this)}>Invite person</button>
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