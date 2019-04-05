import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from './store/store';
import Root from './components/root';
import {fetchSearchGiphys} from './util/api_util';
import * as actions from './actions/giphy_actions';

const store = configureStore();

document.addEventListener("DOMContentLoaded", () => {
  // const store = configureStore();

  ReactDOM.render(
    <Root store={store} />,
    document.getElementById("root")
  );
});

window.store = store;
window.fetchSearchGiphys = fetchSearchGiphys;
window.receiveSearchGiphys = actions.receiveSearchGiphys;
