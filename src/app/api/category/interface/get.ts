export interface IGetResp {
	id: string;
	name: string;
	code: string;
	createDate: string;
	updateDate: string | null;
	deleteDate: string | null;
	note?: string;
}
