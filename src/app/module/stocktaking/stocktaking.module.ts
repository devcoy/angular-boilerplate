import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductComponent } from './component/product/product.component';
import { IndexComponent } from './index.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { StocktakingRoutingModule } from './stocktaking-routing.module';

@NgModule({
	declarations: [IndexComponent, DashboardComponent, ProductComponent],
	imports: [CommonModule, StocktakingRoutingModule]
})
export class StocktakingModule {}
