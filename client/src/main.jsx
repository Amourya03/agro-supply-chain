import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Home from './Home.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-8656jgap0qydhppq.us.auth0.com"
    clientId="woYIgALDQ9JRQmfXFIZf37Gz90q1oCIT"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Router>
      <Home />
    </Router>
  </Auth0Provider>
);
