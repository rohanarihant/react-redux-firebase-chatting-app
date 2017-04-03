import Firebase from 'firebase';
import React from 'react';
import { render } from 'react-dom';

import { FIREBASE_URL } from 'config';
import configureStore from 'store/configureStore';
import Root from './containers/Root';
//
const store = configureStore({
  firebase: new Firebase("https://react-stack.firebaseio.com")
});

// use this database for https://react-redux-chat.firebaseIO.com


render(
  <Root store={ store } />,
  document.getElementById('app-container')
);
