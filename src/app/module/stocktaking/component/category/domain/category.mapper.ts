export class CreateCategoryMapper {
	attrName: any = {};

	constructor() {
		/**
		 * DTO => VO of Backend
		 */
		this.attrName.id = 'id';
		this.attrName.name = 'name';
		this.attrName.code = 'code';
		this.attrName.createdAt = 'createdDate';
		this.attrName.updatedAt = 'updatedDate';
		this.attrName.deletedAt = 'deletedDate';
		this.attrName.note = 'description';

		/**
		 * VO of Backend => DTO
		 */
		this.attrName.id = 'id';
		this.attrName.name = 'name';
		this.attrName.code = 'code';
		this.attrName.createdDate = 'createdAt';
		this.attrName.updatedDate = 'updatedAt';
		this.attrName.deletedDate = 'deletedAt';
		this.attrName.description = 'note';
	}

	/**
	 * Set attr by interface property
	 * @param attr
	 * @returns
	 */
	setAttr(attr: any): any {
		const attrName = this.attrName[attr];
		return attrName;
	}
}
