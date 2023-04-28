export interface IProductItem {
	readonly id: string;
	readonly sortName: string;
	readonly description: string;
	readonly price: number;
	readonly discount: number;
	readonly stock: number;
	readonly isAvailable: boolean;
}
