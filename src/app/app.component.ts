import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadStart, Router } from '@angular/router';
import { WEB_STORAGE_KEY } from '@libs/web-storage';
import { environment } from 'src/environment/environment';
import { IApp, IAppServerConfig } from './app.interface';
import { AppService } from './app.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	appName = 'angular-boilerplate';
	homeUrl = '';
	moduleData!: IApp;
	env!: string;

	// eslint-disable-next-line no-unused-vars
	constructor(private router: Router, private appService: AppService) {
		this.setEnv();
		this.loadServerConfig();
	}

	ngOnInit(): void {
		this.isActiveModule();
	}

	/**
	 * Set current Environment
	 */
	private setEnv(): void {
		this.env = environment.environment;
		if (this.env === 'LOCAL') console.info('ENV: ', this.env);
	}

	/**
	 * Load by environment and save Server Config into sessionStorage
	 */
	private loadServerConfig(): void {
		this.appService.getServerConfig(this.env);
	}

	/**
	 * Check if the Module is active to it decide if load Module with it child routes.
	 */
	private isActiveModule(): void {
		this.router.events.subscribe((event: any) => {
			if (event instanceof RouteConfigLoadStart) {
				this.moduleData = event.route.data as IApp;
				const serverConfig: IAppServerConfig | any = sessionStorage.getItem(
					WEB_STORAGE_KEY.SERVER_CONFIG
				);
				const moduleRoutes: any[] = serverConfig.moduleRoutes;
				const currentModuleConfig: any = moduleRoutes.filter(
					(moduleRoutes) => moduleRoutes.code === this.moduleData.code
				)[0];

				if (!currentModuleConfig.isActive) {
					this.router.navigateByUrl(this.homeUrl);
					throw new Error('Module unavailable');
				}
				this.moduleData.module = currentModuleConfig.module;
				this.moduleData.path = event.route.path as string;
				this.moduleData.description = currentModuleConfig.description;
				this.moduleData.isActive = currentModuleConfig.isActive;

				if (this.env === 'LOCAL') {
					console.info('MODULE: ', this.moduleData);
					console.info(sessionStorage.getItem(WEB_STORAGE_KEY.SERVER_CONFIG));
				}
			}
		});
	}
}
