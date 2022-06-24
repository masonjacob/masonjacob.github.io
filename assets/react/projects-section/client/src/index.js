import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TagFilter from './TagFilter';
import './assets/css/react.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TagFilter/>
    <App/>
  </React.StrictMode>
);

add 