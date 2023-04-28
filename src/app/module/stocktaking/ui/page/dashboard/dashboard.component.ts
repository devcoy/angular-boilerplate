import { Component } from '@angular/core';
import { UserDto } from '@common-service/user/user.dto';
import { UserService$ } from '@common-service/user/user.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
	// eslint-disable-next-line no-unused-vars
	constructor(private userService$: UserService$) {
		this.loadUser();
	}

	private loadUser(): void {
		const user: UserDto = {
			id: '1',
			fullName: 'Jorge Cervantes',
			username: 'devcoy',
			email: 'jcdev1825@gmail.com',
			lastSession: new Date().toISOString()
		};
		this.userService$.setCurrentUser(user);
	}
}
