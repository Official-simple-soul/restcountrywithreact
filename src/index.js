import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RestProvider } from './Component/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RestProvider>
      <App />
    </RestProvider>
  </React.StrictMode>
);

reportWebVitals();

