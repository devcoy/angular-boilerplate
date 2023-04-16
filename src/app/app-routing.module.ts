import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'stocktaking',
		loadChildren: () =>
			import('./module/stocktaking/stocktaking/stocktaking.module').then(
				(m) => m.StocktakingModule
			)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
