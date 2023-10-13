// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class MapperUtil {
	static toArray(array: any[], mapper: any): any {
		if (array === undefined) return null;

		const dto: any[] = [];

		array.forEach((item: any) => {
			const obj = MapperUtil.toObject(item, mapper);
			dto.push(obj);
		});

		return dto;
	}

	static toObject(item: any, mapper: any): any {
		if (!item || item === undefined) return null;

		const data: any = {};

		Object.entries(item).forEach(([key, value]) => {
			const objectKey = mapper.setAttr(key);

			if (objectKey && objectKey !== undefined) {
				if (typeof objectKey === 'object') {
					let objectValue = null;
					if (Array.isArray(value)) {
						objectValue = this.toArray(value, objectKey.mapper);
					} else {
						objectValue = this.toObject(value, objectKey.mapper);
					}
					data[objectKey] = objectValue;
				} else {
					data[objectKey] = value;
				}
			}
		});

		return data;
	}
}
