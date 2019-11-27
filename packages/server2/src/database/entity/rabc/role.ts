import {
	Column,
	Entity,
	JoinTable,
	ManyToMany,
	PrimaryGeneratedColumn
} from "typeorm";

import { Permission } from "./permission";
import { UserGroupEntity } from "../user/UserEntity";

@Entity()
export class Role {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		unique: true
	})
	name: string;

	@ManyToMany(
		type => UserGroupEntity,
		userGroup => userGroup.roles
	)
	userGroups: UserGroupEntity[];

	@ManyToMany(
		type => Permission,
		permission => permission.roles,
		{
			cascade: true
		}
	)
	@JoinTable()
	permissions: Permission[];
}
