import { ICreateDummyReq } from './request.interface';

export class CreateDummyMapper {
	/**
	 *
	 * @param payload
	 * @returns ICreateDummyReq
	 */
	// eslint-disable-next-line no-unused-vars
	public static toRequest(payload: any): ICreateDummyReq {
		// Do magic ✨ to transform payload to Body of the request
		return {};
	}
}
