import * as types from '../common/ActionTypes';

const initialState = {
	something: ''
};

export function Demo(state = initialState, action) {
	switch (action.type) {
	case types.DEMO:
		return Object.assign({}, state, {something: action.something});
	default:
		return state;
	}
}

