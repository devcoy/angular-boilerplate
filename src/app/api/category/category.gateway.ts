/* eslint-disable no-unused-vars */
import { Observable } from 'rxjs';
import {
	ICreateCategoryReq,
	ICreateCategoryRes,
	IDeleteCategoryRes,
	IGetCategoryRes,
	IUpdateCategoryReq,
	IUpdateCategoryRes
} from './interface';

export abstract class CategoryGateway {
	abstract createCategory(
		body: ICreateCategoryReq
	): Observable<ICreateCategoryRes>;
	abstract getAllCategories(): Observable<IGetCategoryRes[]>;
	abstract getCategoryById(id: string): Observable<IGetCategoryRes>;
	abstract updateCategory(
		body: IUpdateCategoryReq
	): Observable<IUpdateCategoryRes>;
	abstract deleteCategory(id: string): Observable<IDeleteCategoryRes>;
}
