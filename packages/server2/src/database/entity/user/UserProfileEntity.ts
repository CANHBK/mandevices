import {
	PrimaryGeneratedColumn,
	Entity,
	Column,
	ManyToMany,
	JoinTable,
	OneToOne
} from "typeorm";
import { PostEntity } from "../post/PostEntity";
import { UserAccountEntity } from "./UserAccountEntity";
import { UserGroupEntity } from "./UserEntity";

@Entity({
	name: "user_profile"
})
export class UserProfileEntity {
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
		type => PostEntity,
		post => post.authors,
		{ cascade: true }
	)
	@JoinTable()
	posts: PostEntity[];

	@OneToOne(
		type => UserAccountEntity,
		account => account.userProfile
	)
	userAccount: UserAccountEntity;

	@ManyToMany(
		type => UserGroupEntity,
		userGroup => userGroup.users
	)
	userGroup: UserGroupEntity[];
}
