import { NgModule } from '@angular/core';
import { StocktakingComponent } from './stocktaking.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: StocktakingComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class StocktakingRoutingModule {}
