import axios, { AxiosPromise } from 'axios';
import { articles } from '../interface/articles';
import { urlArticles } from '../url-list/url';

export interface IGetArticlesServiceData {
	getArticles():AxiosPromise<articles>
}

const headers = {
	'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
}

export class ArticlesService implements IGetArticlesServiceData {
	getArticles(): AxiosPromise<articles> {
		axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
		axios.defaults.headers.post['Content-Type'] = 'application/json'
		return axios.get<articles>(urlArticles,{headers});
	}
}