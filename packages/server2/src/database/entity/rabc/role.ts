import {
	Column,
	Entity,
	JoinTable,
	ManyToMany,
	PrimaryGeneratedColumn
} from "typeorm";

import { Permission } from "./permission";
import { UserGroup } from "../UserEntity";

@Entity()
export class Role {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		unique: true
	})
	name: string;

	@ManyToMany(
		type => UserGroup,
		userGroup => userGroup.roles
	)
	userGroups: UserGroup[];

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
