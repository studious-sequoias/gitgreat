import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App.jsx';
import Home from './components/HomepageApp.jsx';
import CreateEventApp from './components/CreateEventApp.jsx';
import Nav from './components/Nav.jsx';
import EventPlanning from './components/EventPlanning.jsx';
import WhatToBring from './components/WhatToBring.jsx';
import Activities from './components/Activities.jsx';
import Reminders from './components/Reminders.jsx';
import Photos from './components/Photos.jsx';
import Chatroom from './components/Chatroom.jsx';
import PeopleList from './components/PeopleList.jsx';

//Temporary hack to set user name and id;
// var user = prompt('What\'s your name?').split(',');
// sessionStorage.setItem('user', user[0] || 'Casey');
// sessionStorage.setItem('userId', user[1] || 1);
if (!sessionStorage.getItem('user') || !sessionStorage.getItem('userId')) {
  window.location.href = '/login.html';
}
// if (sessionStorage.getItem('userId') === '1') {
//   sessionStorage.setItem('admin', true);
// } else {
//   sessionStorage.setItem('admin', false);
// }

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/home" component={Home} />
      <Route path='/event/:eventId' component={EventPlanning}>
        <IndexRoute component={PeopleList}/>
        <Route path='/what-to-bring' component={WhatToBring}/>
        <Route path='/activities' component={Activities}/>
        <Route path='/reminders' component={Reminders}/>
        <Route path='/photos' component={Photos}/>
        <Route path='/chat' component={Chatroom}/>
        <Route path='/people' component={PeopleList}/>
      </Route>
      <Route path="/create" component={CreateEventApp} />
    </Route>
  </Router>
), document.getElementById('app'));