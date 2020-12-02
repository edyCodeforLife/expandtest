import { IResponseSuccess, articles } from '../interface/articles';
import { IGetArticlesServiceData, ArticlesService } from '../service/hello'

export interface IGetArticlesService {
	getDataArticles(handler:IResponseSuccess): void;
}

export class GetArticlesService implements IGetArticlesService {
	private _service: IGetArticlesServiceData;

	constructor() {
		this._service = new ArticlesService();
	}

	async getDataArticles(handler: IResponseSuccess) {
		try {
			const response = await this._service.getArticles();
			return await handler.Success<articles>(response.data);
		}
		catch (e) {
			return console.log(e);
		}
	}
}