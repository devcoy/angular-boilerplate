import { Injectable } from '@angular/core';
import { WEB_STORAGE_KEY } from '@libs/web-storage';
import { BehaviorSubject, Observable } from 'rxjs';
import { localServerConfig } from 'src/environment/environment';
import { IAppServerConfig } from './app.interface';

@Injectable({
	providedIn: 'root'
})
export class AppService {
	private appServerConfigSubject: BehaviorSubject<IAppServerConfig> =
		new BehaviorSubject({} as IAppServerConfig);
	public readonly appServerConfig: Observable<IAppServerConfig> =
		this.appServerConfigSubject.asObservable();

	setAppServerConfig(appServerConfig: IAppServerConfig): void {
		this.appServerConfigSubject.next(appServerConfig);
	}

	/**
	 * Get Server Config by environment
	 * @param env
	 */
	getServerConfig(env: string): void {
		let serverConfig!: IAppServerConfig;
		if (env === 'LOCAL') serverConfig = localServerConfig;
		else serverConfig = this.downloadServerConfigFromGit();
		this.saveServerConfig(serverConfig);
	}

	/**
	 * Download Server Config from the Git Repository
	 */
	private downloadServerConfigFromGit(): IAppServerConfig {
		throw new Error('Function not implemented.');
	}

	/**
	 * Save Server Config data into sessionStorage
	 */
	private saveServerConfig(config: IAppServerConfig): void {
		this.setAppServerConfig(config);
		sessionStorage.setItem(
			WEB_STORAGE_KEY.SERVER_CONFIG,
			JSON.stringify(config)
		);
	}
}
