import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserDto } from './user.dto';

@Injectable({
	providedIn: 'root'
})
export class UserService$ {
	private currentUserSubject: BehaviorSubject<UserDto> = new BehaviorSubject(
		{} as UserDto
	);
	public readonly currentUser: Observable<UserDto> =
		this.currentUserSubject.asObservable();

	setCurrentUser(currentUser: UserDto): void {
		this.currentUserSubject.next(currentUser);
	}
}
