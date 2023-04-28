import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IndexComponent } from './index.component';
import { StocktakingRoutingModule } from './stocktaking-routing.module';
import { ProductComponent } from './ui/component/product/product.component';
import { DashboardComponent } from './ui/page/dashboard/dashboard.component';

@NgModule({
	declarations: [IndexComponent, DashboardComponent, ProductComponent],
	imports: [CommonModule, StocktakingRoutingModule]
})
export class StocktakingModule {}
