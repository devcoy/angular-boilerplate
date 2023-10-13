export interface ICategory {
	id: string;
	name: string;
	code: string;
	createdAt: Date;
	updatedAt: Date | null;
	deletedAt: Date | null;

	note?: string;
}
