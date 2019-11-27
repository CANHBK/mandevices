import {
	Column,
	OneToOne,
	JoinColumn,
	PrimaryGeneratedColumn,
	Entity
} from "typeorm";
import { UserProfileEntity } from "./UserProfileEntity";

@Entity({
	name: "user_account"
})
export class UserAccountEntity {
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

	@OneToOne(type => UserProfileEntity)
	@JoinColumn()
	userProfile: UserProfileEntity;
}
