//Child component within the HomepageApp and the CreateEventApp to toggle 
//between the two App pages.
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

var Nav = () => (
  <div className="nav">
    <Link to="home" className="title" >Friends</Link>
    <Link to="home" >Home</Link>
    <Link to="create" >Create Event</Link>
    <Link to="login" >Log In</Link>
  </div>
);

export default Nav;