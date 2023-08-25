import { Injectable } from '@angular/core';
import { webStorageConfig } from './common/config';
import { decrypt, encrypt } from './common/encrypt.helper';

@Injectable({
	providedIn: 'root'
})
export class SingletonSecureStorageService {
	/**
	 * Override Web Storage (Local and Session)
	 */
	init(): void {
		Storage.prototype['_setItem'] = Storage.prototype.setItem;
		Storage.prototype['_getItem'] = Storage.prototype.getItem;
		Storage.prototype['_removeItem'] = Storage.prototype.removeItem;
		Storage.prototype['_clear'] = Storage.prototype.clear;

		/**
		 * setItem
		 */
		Storage.prototype.setItem = function (key: string, value: unknown): void {
			let data = JSON.stringify(value);
			if (webStorageConfig.enable) {
				data = encrypt(data);
			}
			this['_setItem'](key, data);
		};

		/**
		 * getItem
		 */
		Storage.prototype.getItem = function (key: string): any {
			const data = this['_getItem'](key);
			if (data !== null) {
				if (webStorageConfig.enable) {
					return decrypt(data);
				}
				return JSON.parse(data);
			}
			return null;
		};

		/**
		 * removeItem
		 */
		Storage.prototype.removeItem = function (key: string): void {
			this['_removeItem'](key);
		};

		/**
		 * clear
		 */
		Storage.prototype.clear = function (): void {
			this['_clear']();
		};
	}
}
