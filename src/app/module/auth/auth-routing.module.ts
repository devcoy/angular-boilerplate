import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ForgotPasswordComponent } from './page/forgot-password/forgot-password.component';
import { SignInComponent } from './page/sign-in/sign-in.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';

const routes: Routes = [
	{
		path: '',
		component: AuthComponent,
		children: [
			{ path: 'sign-in', component: SignInComponent },
			{ path: 'sign-up', component: SignUpComponent },
			{ path: 'forgot-password', component: ForgotPasswordComponent },
			{ path: '', redirectTo: 'sign-in', pathMatch: 'full' }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AuthRoutingModule {}
