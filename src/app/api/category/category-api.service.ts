/* eslint-disable no-unused-vars */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryGateway } from './category.gateway';
import {
	ICreateCategoryReq,
	ICreateCategoryRes,
	IDeleteCategoryRes,
	IGetCategoryRes,
	IUpdateCategoryReq,
	IUpdateCategoryRes
} from './interface';

@Injectable({
	providedIn: 'root'
})
export class CategoryApiService implements CategoryGateway {
	// eslint-disable-next-line @typescript-eslint/no-useless-constructor
	constructor() {}
	createCategory(body: ICreateCategoryReq): Observable<ICreateCategoryRes> {
		throw new Error('Method not implemented.');
	}
	getAllCategories(): Observable<IGetCategoryRes[]> {
		throw new Error('Method not implemented.');
	}
	getCategoryById(id: string): Observable<IGetCategoryRes> {
		throw new Error('Method not implemented.');
	}
	updateCategory(body: IUpdateCategoryReq): Observable<IUpdateCategoryRes> {
		throw new Error('Method not implemented.');
	}
	deleteCategory(id: string): Observable<IDeleteCategoryRes> {
		throw new Error('Method not implemented.');
	}
}
