/* eslint-disable no-unused-vars */
import { Observable } from 'rxjs';

export abstract class ProductGateway {
	abstract createProduct(payload: any): Observable<any>;
	abstract getAllProducts(): Observable<any>;
}
