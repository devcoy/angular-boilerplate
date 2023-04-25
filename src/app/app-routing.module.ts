import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@shared-component/page-not-found/page-not-found.component';

const routes: Routes = [
	{
		path: 'stocktaking',
		loadChildren: () =>
			import('./module/stocktaking/stocktaking.module').then(
				(m) => m.StocktakingModule
			)
	},
	{ path: '', redirectTo: 'stocktaking', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
