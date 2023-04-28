import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/common-ui/page/page-not-found/page-not-found.component';

const routes: Routes = [
	{
		path: 'stocktaking',
		loadChildren: () =>
			import('@stocktaking-module/stocktaking.module').then(
				(module) => module.StocktakingModule
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
