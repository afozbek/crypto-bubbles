import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// import "./scss/scss/main.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./styles/scss/main.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

