import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import apiReducer from './reducer/reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
    api: apiReducer,
});
 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers());

// let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

 window.__store__ = store; // don't forget delete this thing before production

export default store;