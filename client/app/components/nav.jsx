//Child component within the HomepageApp and the CreateEventApp to toggle 
//between the two App pages.
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

var Nav = () => (
  <div className="nav">
  	<a href='/' className="title">Friends</a>
    <a href='/'>Home </a>
    <Link to="create" >Create Event</Link>
    <a href='#'>Log In</a>
  </div>
);

export default Nav;