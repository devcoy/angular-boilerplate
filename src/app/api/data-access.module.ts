import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoryApiService } from './category/category-api.service';
import { CategoryGateway } from './category/category.gateway';

@NgModule({
	declarations: [],
	imports: [CommonModule],
	providers: [
		// Provide the Def (abstract class) with their corresponding implementation (Angular Service)
		{ provide: CategoryGateway, useClass: CategoryApiService }
	]
})
export class DataAccessModule {}
