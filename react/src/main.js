import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router';

import IndexContainer from './containers/IndexContainer';

$(function() {
  let reactElement = document.getElementById('react-app');
  if (reactElement) {
    ReactDOM.render(
       <Router history={browserHistory}>
        <Route path='/' component={IndexContainer} />
       </Router>,
      reactElement
    );
  }
});
