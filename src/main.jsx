import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/styles.css';
import { App } from './components/layouts/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
