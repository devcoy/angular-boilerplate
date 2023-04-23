import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StocktakingComponent } from './page/stocktaking/stocktaking.component';
import { StocktakingRoutingModule } from './stocktaking-routing.module';

@NgModule({
	declarations: [StocktakingComponent],
	imports: [CommonModule, StocktakingRoutingModule]
})
export class StocktakingModule {}
