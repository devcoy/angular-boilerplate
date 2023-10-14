import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryFormComponent } from './page/category-form/category-form.component';
import { CategoryListComponent } from './page/category-list/category-list.component';
import { HomeComponent } from './page/home/home.component';
import { ProductFormComponent } from './page/product-form/product-form.component';
import { ProductListComponent } from './page/product-list/product-list.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'product-form', component: ProductFormComponent },
	{ path: 'product-list', component: ProductListComponent },
	{ path: 'category-form', component: CategoryFormComponent },
	{ path: 'category-list', component: CategoryListComponent },
	{ path: '', redirectTo: 'product-form', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class StocktakingRoutingModule {}
