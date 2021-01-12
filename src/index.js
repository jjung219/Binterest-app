import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './components/App'


ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.querySelector('#root')
); 
