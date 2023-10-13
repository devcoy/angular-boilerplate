export interface ICreateCategoryReq {
	name: string;
	code: string;

	description?: string;
}

export interface ICreateCategoryRes {
	id: string;
	name: string;
	code: string;
	createdDate: Date;

	description?: string;
}
