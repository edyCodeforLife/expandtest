import { GET_DATA_ARTICLES } from './type';

// Action creators
export function getDataArticles(data: Object) {
	return { type: GET_DATA_ARTICLES, data };
}