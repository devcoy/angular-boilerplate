export interface IGetCategoryRes {
	id: string;
	name: string;
	code: string;
	createsDate: Date;
	updatesDate: Date | undefined;
	deletesDate: Date | undefined;

	description?: string;
}
