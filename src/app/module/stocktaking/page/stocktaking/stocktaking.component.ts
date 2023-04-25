import { Component } from '@angular/core';
import { WEB_STORAGE_KEY } from '@bootstrap/web-storage/key';

@Component({
	selector: 'app-stocktaking',
	templateUrl: './stocktaking.component.html',
	styleUrls: ['./stocktaking.component.scss']
})
export class StocktakingComponent {
	constructor() {
		sessionStorage.setItem(WEB_STORAGE_KEY.EMAIL, 'jcdev1825@gmail.com');
		localStorage.setItem(WEB_STORAGE_KEY.USERNAME, 'devcoy');
	}

	decryptData(): void {
		console.log(sessionStorage.getItem(WEB_STORAGE_KEY.EMAIL));
		console.log(localStorage.getItem(WEB_STORAGE_KEY.USERNAME));
	}
}
