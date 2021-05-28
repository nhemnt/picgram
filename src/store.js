import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import imageReducer from 'reducers/imageReducer';
import modalReducer from 'reducers/modalReducer';

const rootReducer = combineReducers({
    imageReducer,
    modalReducer
});

const middleware = applyMiddleware(thunk);

const initialState = {};

// Use compose in case of absence of Redux DevTools
const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;

const store = createStore(rootReducer, initialState, composeEnhancers(middleware));

export default store;
