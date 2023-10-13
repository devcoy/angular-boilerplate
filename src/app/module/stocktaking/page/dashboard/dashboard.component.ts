import { Component } from '@angular/core';
import { CommonShareData } from '@common/index';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
	// eslint-disable-next-line no-unused-vars
	constructor(private userService$: CommonShareData.User.UserService$) {
		this.loadUser();
	}

	private loadUser(): void {
		const user: CommonShareData.User.IUserShared = {
			id: '1',
			fullName: 'Jorge Cervantes',
			username: 'devcoy',
			email: 'jcdev1825@gmail.com',
			lastSession: new Date().toISOString()
		};
		this.userService$.setCurrentUser(user);
	}
}
