import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Permission } from "./permission";

@Entity()
export class Resource {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		unique: true
	})
	name: string;

	@OneToMany(
		type => Permission,
		permission => permission.permissionCategory
	)
	permissions: Permission[];
}
