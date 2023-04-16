import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StocktakingRoutingModule } from './stocktaking-routing.module';
import { StocktakingComponent } from './stocktaking.component';

@NgModule({
	declarations: [StocktakingComponent],
	imports: [CommonModule, StocktakingRoutingModule]
})
export class StocktakingModule {}
