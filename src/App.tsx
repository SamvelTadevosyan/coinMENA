import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { MainContainer } from './views/MainContainer';
import configureStore from './store';
import './styles.css';

const { store, persistor } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Switch>
          <Route path="/" component={MainContainer} exact />
          <Route path="/:tab" component={MainContainer} exact />
        </Switch>
      </PersistGate>
    </Provider>
  );
}

export default App;
