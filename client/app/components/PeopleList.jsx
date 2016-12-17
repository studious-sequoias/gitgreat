import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import PeopleListEntry from './PeopleListEntry.jsx';
import InviteNewUser from './InviteNewUser.jsx';

class PeopleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [{name: 'Casey'}],
      person: '',
      newUser: false,
      admin: false,
      invitePermission: false,
    };

    this.changeName = this.changeName.bind(this);
    this.changeNumber = this.changeNumber.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.invitePerson = this.invitePerson.bind(this);
    this.cancelNewInvite = this.cancelNewInvite.bind(this);
    this.createNewUser = this.createNewUser.bind(this);
    this.toggleAdmin = this.toggleAdmin.bind(this);
    console.log(sessionStorage.getItem('admin'));
  }

  componentWillMount() {
    $.ajax({
      method: 'GET',
      url: '/api/events/id/' + this.props.params.eventId + '/people',
      success: function(data) {
        if (data) {
          var curUser = sessionStorage.getItem('user');
          var user = data.filter(person => person.name === curUser);
          var admin = false;
          var invitePermission = false;
          if (user.length) {
            if (user[0].admin) {
              admin = true;
            }
            if (user[0].invitePermission) {
              invitePermission = true;
            }
          }
          this.setState({
            people: data,
            admin: admin,
            invitePermission: invitePermission
          });
        }
      }.bind(this)
    });
  }

  sendInvite(person) {
    var inviteResponseHandler = function(person, invite) {
      if (invite) {
        this.state.people.push(person);
        this.setState({
          people: this.state.people,
          newUser: false,
          person: '',
          number: '',
          email: ''
        });
      }
    };

    $.ajax({
      method: 'POST',
      url: '/api/events/people',
      data: JSON.stringify({
        eventId: this.props.params.eventId,
        userId: person.id
      }),
      contentType: 'application/json',
      success: inviteResponseHandler.bind(this, person)
    });
  }

  invitePerson() {
    if (this.state.person === '') {
      return;
    }
    this.setState({
      newUser: false
    });
    //Lookup user by name
    $.ajax({
      method: 'GET',
      url: '/api/users/name/' + this.state.person,
      success: function(person) {
        if (person) {
          sessionStorage.setItem('user', person.name);
          sessionStorage.setItem('userId', person.userId);
          //redirect to home
          window.location.href="/";
        } else {
          //redirect to signup
          window.location.href="/signup.html";
        }
      }
    });
  }

  changeName(event) {
    this.setState({
      person: event.target.value,
      newUser: false
    });
  }

  changeNumber(event) {
    this.setState({
      number: event.target.value
    });
  }

  changeEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  cancelNewInvite() {
    this.setState({
      newUser: false
    });
  }

  createNewUser() {
    $.ajax({
      method: 'POST',
      url: '/api/users',
      data: JSON.stringify({
        name: this.state.person,
        phoneNumber: this.state.number,
        email: this.state.email
      }),
      contentType: 'application/json',
      success: this.sendInvite.bind(this)
    });
  }

  toggleAdmin(id) {
    console.log(id);
    var user = this.state.people.filter(person => person.id === id);
    var admin;
    if (user.length) {
      admin = user[0].admin = !user[0].admin;
    }
    this.setState({
      people: this.state.people
    });
    $.ajax({
      method: 'PUT',
      url: '/api/events/people',
      data: JSON.stringify({
        eventId: this.props.params.eventId,
        userId: id,
        changes: {
          admin: admin
        }
      }),
      contentType: 'application/json'
    });
  }

  render() {
    console.log('admin', this.state.admin);
    return (
      <div>
        {this.state.invitePermission && <input type="text" placeholder="Name" onChange={this.changeName.bind(this)}/>}
        {this.state.invitePermission && <button onClick={this.invitePerson}>Invite person</button>}
        {this.state.newUser && <InviteNewUser changeNumber={this.changeNumber} changeEmail={this.changeEmail} cancel={this.cancelNewInvite} invite={this.createNewUser}/>}
        <h2>Invited:</h2>
        <table>
          <tbody>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Email</th>
            {this.state.admin && <th>Admin</th>}
            {this.state.admin && <th>Allow Invites</th>}
            <th>Going</th>
          </tr>
          {this.state.people.map( (person, i) => {
            return (
              <PeopleListEntry key={i} person={person} admin={this.state.admin} toggleAdmin={this.toggleAdmin}/>
            );
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PeopleList;