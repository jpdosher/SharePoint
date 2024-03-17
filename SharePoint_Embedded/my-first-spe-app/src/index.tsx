import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Providers } from "@microsoft/mgt-element";
import { Msal2Provider } from "@microsoft/mgt-msal2-provider";
import * as Constants from "./common/constants"
import * as Scopes from "./common/scopes";

Providers.globalProvider = new Msal2Provider({
  clientId: Constants.CLIENT_ENTRA_APP_CLIENT_ID,
  authority: Constants.CLIENT_ENTRA_APP_AUTHORITY,
  scopes: [
    ...Scopes.GRAPH_OPENID_CONNECT_BASIC,
    Scopes.GRAPH_USER_READ_ALL,
    Scopes.GRAPH_FILES_READ_WRITE_ALL,
    Scopes.GRAPH_SITES_READ_ALL,
    Scopes.SPEMBEDDED_FILESTORAGECONTAINER_SELECTED
  ]
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
