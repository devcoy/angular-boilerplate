import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IndexComponent } from './index.component';
import { StocktakingRoutingModule } from './stocktaking-routing.module';
import { StocktakingService } from './stocktaking.service';
import { ProductComponent } from './ui/component/product/product.component';
import { DashboardPageComponent } from './ui/page/dashboard/dashboard.page.component';

@NgModule({
	declarations: [IndexComponent, DashboardPageComponent, ProductComponent],
	imports: [CommonModule, StocktakingRoutingModule],
	providers: [StocktakingService]
})
export class StocktakingModule {
	// eslint-disable-next-line no-unused-vars
	constructor(private stocktakingService: StocktakingService) {}
}
