import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { CategoryComponent } from './component/category/category.component';
import { IndexComponent } from './index.component';
import { CategoryFormComponent } from './page/category-form/category-form.component';
import { CategoryListComponent } from './page/category-list/category-list.component';
import { HomeComponent } from './page/home/home.component';
import { ProductFormComponent } from './page/product-form/product-form.component';
import { ProductListComponent } from './page/product-list/product-list.component';
import { StocktakingRoutingModule } from './stocktaking-routing.module';

@NgModule({
	declarations: [
		IndexComponent,
		HomeComponent,
		ProductFormComponent,
		ProductListComponent,
		CategoryFormComponent,
		CategoryListComponent,
		CategoryComponent
	],
	imports: [CommonModule, MaterialModule, StocktakingRoutingModule]
})
export class StocktakingModule {}
