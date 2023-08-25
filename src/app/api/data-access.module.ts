import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoryService } from './category/category.service';
import { Gateway } from './category/gateway';

@NgModule({
	declarations: [],
	imports: [CommonModule],
	providers: [
		// Provide the Def (abstract class) with their corresponding implementation (Angular Service)
		{ provide: Gateway, useClass: CategoryService }
	]
})
export class DataAccessModule {}
