import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoryComponent } from './component/category/category.component';
import { IndexComponent } from './index.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { StocktakingRoutingModule } from './stocktaking-routing.module';

@NgModule({
	declarations: [IndexComponent, DashboardComponent, CategoryComponent],
	imports: [CommonModule, StocktakingRoutingModule]
})
export class StocktakingModule {}
