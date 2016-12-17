import React from 'react';
import ReactDOM from 'react-dom';

var PeopleListEntry = (props) => (
  <div>
    <span>{props.person.name}</span> | 
    <span>{props.person.phoneNumber}</span> | 
    <span>{props.person.email}</span>
  </div>
);


export default PeopleListEntry;
