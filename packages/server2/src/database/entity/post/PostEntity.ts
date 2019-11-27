import {
	CreateDateColumn,
	UpdateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToMany
} from "typeorm";
import { UserProfileEntity } from "../user/UserProfileEntity";

@Entity({
	name: "post"
})
export class PostEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	title: string;

	@Column()
	content: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@ManyToMany(
		type => UserProfileEntity,
		user => user.posts
	)
	authors: UserProfileEntity[];
}
