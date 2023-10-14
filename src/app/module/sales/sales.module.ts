import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IndexComponent } from './index.component';
import { AllSalesComponent } from './page/all-sales/all-sales.component';
import { BasketComponent } from './page/basket/basket.component';
import { HomeComponent } from './page/home/home.component';
import { ItemReturnComponent } from './page/item-return/item-return.component';
import { SalesRoutingModule } from './sales-routing.module';

@NgModule({
	declarations: [
		IndexComponent,
		HomeComponent,
		BasketComponent,
		ItemReturnComponent,
		AllSalesComponent
	],
	imports: [CommonModule, SalesRoutingModule]
})
export class SalesModule {}
