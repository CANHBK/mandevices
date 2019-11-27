import { Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

import { Role } from "../rabc/role";
import { UserProfileEntity } from "./UserProfileEntity";

@Entity({
	name: "user_group"
})
export class UserGroupEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToMany(
		type => Role,
		role => role.userGroups
	)
	@JoinTable()
	roles: Role[];

	@ManyToMany(
		type => UserProfileEntity,
		userProfile => userProfile.userGroup
	)
	@JoinTable()
	users: UserProfileEntity[];
}
