import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Importing the Bootstrap 5 CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import font-awesome
import 'font-awesome/css/font-awesome.min.css';
// Style
import './style.css'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();