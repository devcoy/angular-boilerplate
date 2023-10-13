import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoryApi } from '@api/index';
import { CommonShareData } from '@common/index';
import { WebStorage } from '@shared/index';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {
	private readonly categoryApi = CategoryApi.CategoryGateway;
	private user$: Subscription | undefined;
	user!: CommonShareData.User.IUserShared;
	constructor(
		// eslint-disable-next-line no-unused-vars
		private userShareDataService$: CommonShareData.User.UserService$
	) {}

	ngOnInit(): void {
		this.user$ = this.userShareDataService$.currentUser.subscribe(
			(currentUser: any) => (this.user = currentUser)
		);
		this.saveUserInfo();
	}

	ngOnDestroy(): void {
		this.user$?.unsubscribe();
	}

	private saveUserInfo(): void {
		sessionStorage.setItem(WebStorage.KEY.EMAIL, this.user.email);
		localStorage.setItem(WebStorage.KEY.USERNAME, this.user.username);
	}

	protected decryptData(): void {
		console.log(sessionStorage.getItem(WebStorage.KEY.EMAIL));
		console.log(localStorage.getItem(WebStorage.KEY.USERNAME));
	}
}
