import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App.jsx';
import Home from './components/HomepageApp.jsx';
import CreateEventApp from './components/CreateEventApp.jsx';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="home" component={Home}/>
      <Route path="create" component={CreateEventApp}/>
    </Route>
  </Router>
), document.getElementById('app'));