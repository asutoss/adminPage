import React from 'react';
import AppRouter from './router/appRouter';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';

function App() {
  return (
    <Provider className="App" store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
