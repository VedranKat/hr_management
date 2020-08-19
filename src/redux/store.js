import { createStore, compose, applyMiddleware } from 'redux';

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(    
    initialState,
    composeEnhancers(applyMiddleware())
  );

  return store;
}
