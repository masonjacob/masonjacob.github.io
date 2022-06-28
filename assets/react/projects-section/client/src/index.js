import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux'
import store from './components/reduxStore'
import './assets/css/react.css';
import Loading from './components/Loading';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Loading type={"bars"} color={"#6f199d"}/>
  </Provider>
);