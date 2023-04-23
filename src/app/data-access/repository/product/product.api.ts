import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductGateway } from '.';

@Injectable({
	providedIn: 'root'
})
export class ProductApi implements ProductGateway {
	// eslint-disable-next-line @typescript-eslint/no-useless-constructor
	constructor() {}

	// eslint-disable-next-line no-unused-vars
	createProduct(payload: any): Observable<any> {
		// Implementation to save data using HttpClient
		throw new Error('Method not implemented.');
	}
	getAllProducts(): Observable<any> {
		// Implementation to get all data using HttpClient
		throw new Error('Method not implemented.');
	}
}
