import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';


export default function (state = {} , action) {
	switch (action.type) {
	case DELETE_POST:
		// lodash method
		return  _.omit(state, action.payload)
	case FETCH_POST:
		// const post = action.payload.data;
		// // taking exisit state
		// const newState = { ...state}
		// newState[post.id] = post;
		// return newState;

							// Making new keys
		return {...state, [action.payload.data.id] : action.payload.data}

	case FETCH_POSTS:
		return _.mapKeys(action.payload.data, 'id');
		default:
		return state;
	}
}