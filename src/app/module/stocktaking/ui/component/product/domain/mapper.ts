import { ICreateDummyResp } from '@repository/product/usecase/create-dummy/response.interface';
import { StrictBuilder } from 'builder-pattern';
import { IProductItem } from './interface';
import { ProductItemModel } from './model';

export class ProductMapper {
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
