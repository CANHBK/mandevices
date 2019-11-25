import {
	Column,
	Entity,
	JoinColumn,
	JoinTable,
	ManyToMany,
	OneToOne,
	PrimaryGeneratedColumn
} from "typeorm";

import { Role } from "./rabc/role";

@Entity()
export class UserGroup {
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToMany(
		type => Role,
		role => role.userGroups
	)
	@JoinTable()
	roles: Role[];

	@ManyToMany(
		type => UserProfile,
		userProfile => userProfile.userGroup
	)
	@JoinTable()
	users: UserProfile[];
}

@Entity()
export class UserProfile {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		nullable: false
	})
	fullName: string;

	@Column({
		nullable: false
	})
	email: string;

	@ManyToMany(
		type => UserGroup,
		userGroup => userGroup.users
	)
	userGroup: UserGroup[];
}

@Entity()
export class UserAccount {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		unique: true
	})
	email: string;

	@Column()
	password: string;

	@Column()
	passwordSalt: string;

	@Column()
	passwordHashAlgorithm: string;

	@Column({
		type: "datetime",
		comment: "Thời gian đăng kí tài khoản"
	})
	registrationTime: Date;

	@Column({
		comment: "Token để xác thực Email",
		nullable: true
	})
	emailConfirmationToken: string;

	@Column({
		nullable: true,
		comment: "Token để khôi phục mật khẩu"
	})
	passwordReminderToken: string;

	@Column({
		type: "tinyint",
		unsigned: true,
		nullable: true,
		comment: "Thời gian sống của token khôi phục mật khẩu"
	})
	passwordReminderExpire: number;

	@OneToOne(type => UserProfile)
	@JoinColumn()
	userProfile: UserProfile;
}
