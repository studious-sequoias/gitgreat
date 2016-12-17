import React from 'react';
import ReactDOM from 'react-dom';

var PeopleListEntry = (props) => (
  <tr>
    <td>{props.person.name}</td>
    <td>{props.person.phoneNumber}</td>
    <td>{props.person.email}</td>
    {props.admin && <td>{props.person.admin ? 'Yes' : ''}</td>}
    {props.admin && <td>{props.person.invitePermission ? 'Yes' : ''}</td>}
    <td>{props.person.goingResponded ? (props.person.going ? 'Yes' : 'No') : ''}</td>
  </tr>
);


export default PeopleListEntry;
