import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@shared/component/page-not-found/page-not-found.component';

const routes: Routes = [
	{
		path: 'auth',
		loadChildren: () =>
			import('./module/auth/auth.module').then((m) => m.AuthModule)
	},
	{
		path: 'admin',
		loadChildren: () =>
			import('./module/admin/admin.module').then((m) => m.AdminModule)
	},
	{
		path: 'stocktaking',
		loadChildren: () =>
			import('./module/stocktaking/stocktaking.module').then(
				(m) => m.StocktakingModule
			)
	},
	{
		path: 'sales',
		loadChildren: () =>
			import('./module/sales/sales.module').then((m) => m.SalesModule)
	},
	{ path: '', redirectTo: 'stocktaking', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
