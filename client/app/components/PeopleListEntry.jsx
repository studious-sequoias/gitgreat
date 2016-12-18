import React from 'react';
import ReactDOM from 'react-dom';

var PeopleListEntry = (props) => (
  <tr>
    <td>{props.person.name}</td>
    <td>{props.person.phoneNumber}</td>
    <td>{props.person.email}</td>
    {props.admin && <td><input type="checkbox" checked={props.person.admin} onChange={props.toggleAdmin.bind(this, props.person.id)}/></td>}
    {props.admin && <td><input type="checkbox" checked={props.person.invitePermission} onChange={props.toggleInvitePermission.bind(this, props.person.id)}/></td>}
    <td>{props.person.goingResponded ? (props.person.going ? 'Yes' : 'No') : ''}</td>
  </tr>
);


export default PeopleListEntry;
