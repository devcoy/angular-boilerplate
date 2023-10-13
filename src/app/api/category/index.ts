/**
 * Export only that can you use in another layer.
 * - You should need export the Interfaces and the Gateway.
 * - You shouldn't export the Service, because it is provide in data-access.module
 */
export * from './category.gateway';
export * from './interface';
