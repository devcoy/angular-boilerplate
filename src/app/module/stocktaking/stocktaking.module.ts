import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IndexComponent } from './index.component';
import { StocktakingRoutingModule } from './stocktaking-routing.module';
import { DashboardComponent } from './page/dashboard/dashboard.component';

@NgModule({
	declarations: [IndexComponent, DashboardComponent],
	imports: [CommonModule, StocktakingRoutingModule]
})
export class StocktakingModule {}
