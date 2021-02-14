import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import apiReducer from './reducer/reducer';
import createSagaMiddlware from 'redux-saga'
import { apiRootSaga } from './saga/saga';

// import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
    api: apiReducer,
});
 
const sagaMiddlware = createSagaMiddlware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(sagaMiddlware)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

sagaMiddlware.run(apiRootSaga)

 window.__store__ = store; // don't forget delete this thing before production


export default store;