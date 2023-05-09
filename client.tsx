import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './layouts/App';

const root = document.createElement('div');
createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

document.body.appendChild(root);
