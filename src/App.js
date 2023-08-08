import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Routes } from './routes/routes';
import store from '~/store';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
