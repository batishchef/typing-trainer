import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/ui/App';
import { store } from './app/redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);