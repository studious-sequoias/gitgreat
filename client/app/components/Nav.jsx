//Child component within the HomepageApp and the CreateEventApp to toggle
//between the two App pages.
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

var Nav = () => (
  <div className="nav">
    <Link to="/home" className="title" >FRIENDS</Link>
    <Link to="/home" >Home</Link>
    <Link to="/create" >Create Event</Link>
    <a href="/login.html" >Log Out</a>
  </div>
);

export default Nav;