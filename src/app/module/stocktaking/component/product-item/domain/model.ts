export class ProductItemModel {
	/**
	 *
	 * @param price
	 * @returns number
	 */
	static calculateDiscount(price: number): number {
		return price > 1000 ? 5 : 0;
	}

	/**
	 *
	 * @param stock
	 * @returns boolean
	 */
	static isAvailable(stock: number): boolean {
		return stock > 0 ? true : false;
	}
}
