import React from 'react';
import App from './components/App';
import  { createStore } from 'redux';
import rootReducer from './store/module';
import { Provider } from 'react-redux';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

function Root() {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  );
}

export default Root;
