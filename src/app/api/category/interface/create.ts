export interface ICreateReq {
	name: string;
	code: string;
	note?: string;
}
export interface ICreateResp {
	id: string;
	name: string;
	code: string;
	createDate: string;
	updateDate: null;
	deleteDate: null;
	note?: string;
}
