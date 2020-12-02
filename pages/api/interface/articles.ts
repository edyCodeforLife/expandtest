export interface articles {
	data: article[];
	offset: number;
	total: number;
}

export interface article {
	content: string,
	created_at: Date | string;
	created_by?: string;
	excerpt: string;
	id: number;
	is_comment:number;
	is_page: number;
	numbookmark?: number;
	numlike?: number;
	numviewer: number;
	page_id: number;
	postcat: postcat;
	postcat_id: number;
	postmetas: postmetas[];
	posttags: posttags[];
	publish_datetime: Date | string;
	slug: string;
	status: string;
	subtitle: string;
	title: string;
	updated_at: Date | string;
	updated_by?: string;
	user: user[];
	user_id: number;
	_imgurl: string;
}

export interface postcat {
	id: number;
	slug: string;
	title: string;
}

export interface postmetas {
	id: number;
	key: string;
	value: string;
}

export interface posttags {
	id: number;
	name: string;
	post_id: number;
}

export interface user {
	email: string;
	firstname: string;
	id: number;
	lastname: string;
	username: string;
}

export interface IResponseError {
	ServiceError: () => void;
}

export interface IResponseSuccess {
	Success?: <T>(res: T) => void;
}