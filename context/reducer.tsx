import { GET_DATA_ARTICLES } from './type';

// Reducer
export function appReducer(state, action) {
	switch (action.type) {
		case GET_DATA_ARTICLES:
			return { articlesData: action.data };
		default:
			return state;
	}
}