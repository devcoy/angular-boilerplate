import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { IndexComponent } from './index.component';
import { ForgotPasswordComponent } from './page/forgot-password/forgot-password.component';
import { SignInComponent } from './page/sign-in/sign-in.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';

@NgModule({
	declarations: [
		IndexComponent,
		SignInComponent,
		SignUpComponent,
		ForgotPasswordComponent
	],
	imports: [CommonModule, AuthRoutingModule]
})
export class AuthModule {}