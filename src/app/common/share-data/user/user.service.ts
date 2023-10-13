import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUserShared } from './user-shared';

@Injectable({
	providedIn: 'root'
})
export class UserService$ {
	private currentUserSubject: BehaviorSubject<IUserShared> =
		new BehaviorSubject({} as IUserShared);
	public readonly currentUser: Observable<IUserShared> =
		this.currentUserSubject.asObservable();

	setCurrentUser(currentUser: IUserShared): void {
		this.currentUserSubject.next(currentUser);
	}
}
