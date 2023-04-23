import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductGateway } from './repository/product';
import { ProductApi } from './repository/product/product.api';

@NgModule({
	declarations: [],
	imports: [CommonModule],
	providers: [
		// Provide the interfaces with their corresponding implementations
		{ provide: ProductGateway, useClass: ProductApi }
	]
})
export class DataAccessModule {}
