import {
	Column,
	Entity,
	ManyToMany,
	ManyToOne,
	PrimaryGeneratedColumn
} from "typeorm";

import { Resource } from "./resource";
import { Role } from "./role";

@Entity()
export class Permission {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		unique: true
	})
	name: string;

	@Column()
	description: string;

	@ManyToMany(
		type => Role,
		role => role.permissions
	)
	roles: Role[];

	@ManyToOne(
		type => Resource,
		permsCtg => permsCtg.permissions,
		{
			cascade: true
		}
	)
	permissionCategory: Resource;
}
