import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gateway } from './gateway';
import { ICreateReq, ICreateResp } from './interface/create';
import { IGetResp } from './interface/get';

@Injectable({
	providedIn: 'root'
})
export class CategoryService implements Gateway {
	// eslint-disable-next-line @typescript-eslint/no-useless-constructor
	constructor() {}

	// eslint-disable-next-line no-unused-vars
	createCategory(body: ICreateReq): Observable<ICreateResp> {
		// Implementation to save data using HttpClient
		throw new Error('Method not implemented.');
	}
	getAllCategories(): Observable<IGetResp[]> {
		// Implementation to get all data using HttpClient
		throw new Error('Method not implemented.');
	}
}
