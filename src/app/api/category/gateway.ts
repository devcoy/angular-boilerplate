/* eslint-disable no-unused-vars */
import { Observable } from 'rxjs';
import { ICreateReq, ICreateResp } from './interface/create';
import { IGetResp } from './interface/get';

export abstract class Gateway {
	abstract createCategory(body: ICreateReq): Observable<ICreateResp>;
	abstract getAllCategories(): Observable<IGetResp[]>;
}
