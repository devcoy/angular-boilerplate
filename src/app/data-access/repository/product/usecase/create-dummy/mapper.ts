import { IProductItem } from '@module-stocktaking/component/product/domain/interface';
import { ProductItemModel } from '@module-stocktaking/component/product/domain/model';
import { StrictBuilder } from 'builder-pattern';
import { ICreateDummyReq } from './request.interface';
import { ICreateDummyResp } from './response.interface';

export class CreateDummyMapper {
	/**
	 *
	 * @param payload
	 * @returns ICreateDummyReq
	 */
	// eslint-disable-next-line no-unused-vars
	public static toRequest(payload: any): ICreateDummyReq {
		// Do magic ✨ to transform payload to Body of the request
		return {};
	}

	/**
	 *
	 * @param raw
	 * @returns IProductItem
	 */
	public static toModel(raw: ICreateDummyResp): IProductItem {
		// Do magic ✨ to transform response to Interface of Component that will use data
		return StrictBuilder<IProductItem>()
			.description(raw.description)
			.discount(ProductItemModel.calculateDiscount(raw.price))
			.id(raw.id)
			.isAvailable(ProductItemModel.isAvailable(raw.stock))
			.price(raw.price)
			.sortName(raw.sortName)
			.stock(raw.stock)
			.build();
	}
}
