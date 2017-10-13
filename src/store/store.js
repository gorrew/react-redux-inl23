import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';

import mainReducer from '../reducers/mainReducer';
import productReducer from '../reducers/productReducer';

export default createStore(
    combineReducers({
        mainReducer, productReducer
    }),
    applyMiddleware(createLogger())
);