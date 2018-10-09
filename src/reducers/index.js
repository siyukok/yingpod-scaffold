import {combineReducers} from 'redux';
import * as types from '../common/ActionTypes';
import {Demo} from './Demo';

const appReducer = combineReducers({
	/* your app’s top-level reducers */
	Demo
});

const rootReducer = (state, action) => {
	if (action.type === types.RESET) {
		state = undefined;
	}

	return appReducer(state, action);
};

export default {
	reducer: rootReducer
};
