import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/react.css';
import Loading from './components/Loading';

const root = ReactDOM.createRoot(document.getElementById('projects-application'));
root.render(
  <React>
    <Loading type={"bars"} color={"#6f199d"}/>
  </React>
);