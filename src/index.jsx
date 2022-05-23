// CONFIG IMPORT
import React from 'react';

// REACT DOM IMPORT
import ReactDOM from "react-dom/client";

// ACTION CABLE IMPORT
import { ActionCableProvider } from 'react-actioncable-provider';

// APP IMPORT
import App from './App';

// STYLES IMPORT
import './styles/index.scss';

// URL IMPORT
import { API_WS_ROOT  } from './constants/index';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ActionCableProvider url={API_WS_ROOT}>
    <App />
  </ActionCableProvider>
);