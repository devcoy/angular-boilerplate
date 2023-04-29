export interface IApp {
	module: string;
	path: string;
	code: string;
	isActive: boolean;
	description?: string;
}

export interface IAppServerConfig {
	env: string;
	dataAccess: IDataAccess;
	moduleRoutes: IModuleRoute[];
	encryptWebStorage: IEncryptWebStorage;
}
export interface IEncryptWebStorage {
	isEnable: boolean;
	encryptKey: string;
}
export interface IModuleRoute {
	module: string;
	code: string;
	isActive: boolean;
	description?: string;
}

export interface IDataAccess {
	baseUrl: string;
	resources: IResource[];
}

export interface IResource {
	resource: string;
	resourceUrl: string;
}
