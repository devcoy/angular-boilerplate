import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SingletonConfigServerService } from './bootstrap/server-config/singleton-config-server.service';
import { IndexComponent } from './index.component';
import { StocktakingRoutingModule } from './stocktaking-routing.module';
import { ProductComponent } from './ui/component/product/product.component';
import { DashboardComponent } from './ui/page/dashboard/dashboard.component';

@NgModule({
	declarations: [IndexComponent, DashboardComponent, ProductComponent],
	imports: [CommonModule, StocktakingRoutingModule],
	providers: [SingletonConfigServerService]
})
export class StocktakingModule {
	constructor(
		// eslint-disable-next-line no-unused-vars
		private singletonConfigServerService: SingletonConfigServerService
	) {}
}
