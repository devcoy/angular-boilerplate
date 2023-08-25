import * as CryptoJS from 'crypto-js';
import { webStorageConfig } from './config';

export const encrypt = (data: string): string => {
	return CryptoJS.AES.encrypt(data, webStorageConfig.encryptKey).toString();
};

export const decrypt = <T>(value: string): T | null => {
	const valueDecrypt = CryptoJS.AES.decrypt(
		value,
		webStorageConfig.encryptKey
	).toString(CryptoJS.enc.Utf8);
	if (!valueDecrypt) {
		return null;
	}
	return JSON.parse(valueDecrypt) as T;
};
