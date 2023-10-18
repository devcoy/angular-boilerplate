import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Global } from './_global/global';
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
	imports: [CommonModule, AuthRoutingModule],
	providers: [Global]
})
export class AuthModule {}
