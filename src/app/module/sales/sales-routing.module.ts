import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSalesComponent } from './page/all-sales/all-sales.component';
import { BasketComponent } from './page/basket/basket.component';
import { HomeComponent } from './page/home/home.component';
import { ItemReturnComponent } from './page/item-return/item-return.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'basket', component: BasketComponent },
	{ path: 'item-return', component: ItemReturnComponent },
	{ path: 'all-sales', component: AllSalesComponent },
	{ path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SalesRoutingModule {}
