import {persistStore, persistCombineReducers} from 'redux-persist';
import {compose, createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import reducer from '../reducers/index';
import {AsyncStorage} from 'react-native';

const config = {
	key: 'root',
	storage: AsyncStorage,
	debug: true,
};

const middlewares = [];

if (__DEV__) {
	middlewares.push(logger);
}

let persistReducer = persistCombineReducers(config, reducer);

let store = createStore(persistReducer, undefined, compose(applyMiddleware(...middlewares)));
let persistor = persistStore(store);

export {persistor, store};
