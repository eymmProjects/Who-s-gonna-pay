import React from 'react';

import * as ReactDOMClient from 'react-dom/client';
// import ReactDOM from 'react-dom';
import App from './App';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App initialCount={0} />
  </React.StrictMode>
);
