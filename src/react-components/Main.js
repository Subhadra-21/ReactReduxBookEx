import React from 'react';
import { Provider, useStore } from 'react-redux';
import ReactDOM from 'react-dom';
import store from '../redux-components/reducers-store.js';
import BookContainer from './BookContainer.js';
import '../style.css';

function MainComp(props) {
  return (
    <Provider store={store}>
      <BookContainer />
    </Provider>
  );
}

ReactDOM.render(<MainComp />, document.getElementById('root'));
