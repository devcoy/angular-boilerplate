import { Component } from '@angular/core';
import {
	FormControl,
	FormGroup,
	FormGroupDirective,
	NgForm,
	Validators
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Global } from '../../_global/global';

// Error when invalid control is dirty, touched or submitted.
export class ErrorMatcher implements ErrorStateMatcher {
	isErrorState(
		control: FormControl | null,
		form: FormGroupDirective | NgForm | null
	): boolean {
		const isSubmitted = form && form.submitted;
		return !!(
			control &&
			control.invalid &&
			(control.dirty || control.touched || isSubmitted)
		);
	}
}

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
	signInForm!: FormGroup;
	errorMatcher = new ErrorMatcher();

	// eslint-disable-next-line no-unused-vars
	constructor(protected global: Global) {
		this.buildSignInForm();
	}

	private buildSignInForm(): void {
		this.signInForm = new FormGroup({
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [Validators.required])
		});
	}

	protected signIn(): void {
		const { email, password } = this.signInForm.value;
		console.log(email);
		console.log(password);
	}
}
