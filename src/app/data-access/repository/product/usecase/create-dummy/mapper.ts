import { ICreateDummyReq } from './request.interface';
import { ICreateDummyResp } from './response.interface';

export class CreateDummyMapper {
	// eslint-disable-next-line no-unused-vars
	public static toRequest(payload: any): ICreateDummyReq {
		// Do magic ✨ to transform payload to body of the request
		return {};
	}

	// eslint-disable-next-line no-unused-vars
	public static toModel(raw: ICreateDummyResp): unknown {
		// Do magic ✨ to transform response to Model of Component that will use data
		return {};
	}
}
