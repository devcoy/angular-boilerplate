import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { Global } from './_global/global';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ForgotPasswordComponent } from './page/forgot-password/forgot-password.component';
import { SignInComponent } from './page/sign-in/sign-in.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';

@NgModule({
	declarations: [
		AuthComponent,
		SignInComponent,
		SignUpComponent,
		ForgotPasswordComponent
	],
	imports: [
		CommonModule,
		AuthRoutingModule,
		MaterialModule,
		ReactiveFormsModule
	],
	providers: [Global]
})
export class AuthModule {}
