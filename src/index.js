// src/index.js
import React from 'react'; // Import React
import ReactDOM from 'react-dom'; // Import ReactDOM
import './index.css'; // Import global styles
import App from './App'; // Import the App component

// Render the App component into the root div
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
