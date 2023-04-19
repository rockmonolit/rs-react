import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import './index.scss';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = document.getElementById('root') as Element;

hydrateRoot(
  root,
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
