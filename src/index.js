import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import ErrorBoundary from './ErrorBoundary';

/*
const main = (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
)
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);