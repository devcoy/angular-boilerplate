import { IAppServerConfig } from 'src/app/app.interface';

export const environment = {
	production: false,
	environment: 'LOCAL'
};

export const localServerConfig: IAppServerConfig = {
	env: 'LOCAL',
	dataAccess: {
		baseUrl: 'http://localhost:8080',
		resources: [
			{
				resource: 'AUTH',
				resourceUrl: '/auth'
			},
			{
				resource: 'PRODUCTS',
				resourceUrl: '/products'
			}
		]
	},
	moduleRoutes: [
		{
			module: 'stocktaking',
			code: 'STOCKTAKING',
			description: '',
			isActive: true
		},
		{
			module: 'pos',
			code: 'POS',
			description: 'Point Of Sales',
			isActive: false
		}
	],
	encryptWebStorage: {
		isEnable: true,
		encryptKey: 'rtvvY5AJYwlcsnOTiyY2@bGKbuilhP9WR6IuCUbH3'
	}
};
