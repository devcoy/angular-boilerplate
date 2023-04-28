import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserDto } from '@common-service/user/user.dto';
import { UserService$ } from '@common-service/user/user.service';
import { WEB_STORAGE_KEY } from '@libs/web-storage';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
	private user$: Subscription | undefined;
	user!: UserDto;
	// eslint-disable-next-line no-unused-vars
	constructor(private userService$: UserService$) {}

	ngOnInit(): void {
		this.user$ = this.userService$.currentUser.subscribe(
			(currentUser) => (this.user = currentUser)
		);
		this.saveUserInfo();
	}

	ngOnDestroy(): void {
		this.user$?.unsubscribe();
	}

	private saveUserInfo(): void {
		sessionStorage.setItem(WEB_STORAGE_KEY.EMAIL, this.user.email);
		localStorage.setItem(WEB_STORAGE_KEY.USERNAME, this.user.username);
	}

	protected decryptData(): void {
		console.log(sessionStorage.getItem(WEB_STORAGE_KEY.EMAIL));
		console.log(localStorage.getItem(WEB_STORAGE_KEY.USERNAME));
	}
}
