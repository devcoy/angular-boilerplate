export interface IUpdateCategoryReq {
	name: string;
	code: string;

	description?: string;
}
export interface IUpdateCategoryRes {
	id: string;
	name: string;
	code: string;
	createdDate: Date;
	updatedDate: Date | undefined;
	deletedDate: Date | undefined;

	description?: string;
}
