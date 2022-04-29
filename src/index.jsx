import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import './styles/index.scss';

// REACT COOKIE IMPORTS
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </React.StrictMode>
);