import { QueryRunner, getManager } from "typeorm";
import { UserAccount, UserProfile } from "../entity/UserEntity";

interface UserProfileCreateInput {
	fullName: string;
	email: string;
}

export class UserProfileController {
	private static instance: UserProfileController;
	private constructor() {}
	static getInstance = (): UserProfileController => {
		if (!UserProfileController.instance) {
			UserProfileController.instance = new UserProfileController();
		}
		return UserProfileController.instance;
	};

	getByEmail(email: string) {
		return getManager().findOne(UserProfile, { where: { email } });
	}

	create(
		userProfileCreateInput: UserProfileCreateInput,
		queryRunner?: QueryRunner
	) {
		const newUserProfile = getManager().create(UserProfile, {
			...userProfileCreateInput
		});
		if (typeof queryRunner === undefined) {
			return getManager().save(newUserProfile);
		}
		return queryRunner.manager.save(newUserProfile);
	}
	findById(id: string) {
		return getManager().findOne(UserProfile, id);
	}
}

interface UserAccountCreateInput {
	email: string;
	password: string;
	passwordSalt: string;
	passwordHashAlgorithm: string;
	registrationTime: Date;
	emailConfirmationToken: string;
	userProfile: UserProfile;
}

export class UserAccountController {
	private static instance: UserAccountController;
	private constructor() {}
	static getInstance = (): UserAccountController => {
		if (!UserAccountController.instance) {
			UserAccountController.instance = new UserAccountController();
		}
		return UserAccountController.instance;
	};

	create(
		userAccountCreateInput: UserAccountCreateInput,
		queryRunner?: QueryRunner
	) {
		const userAccount = getManager().create(UserAccount, {
			...userAccountCreateInput
		});
		if (typeof queryRunner === undefined) {
			return getManager().save(userAccount);
		}
		return queryRunner.manager.save(userAccount);
	}
	getByEmail(email: string) {
		return getManager().findOne(UserAccount, { where: { email } });
	}

	setEmailConfirmed(email: string) {
		return getManager().update(
			UserAccount,
			{ email },
			{ emailConfirmationToken: null }
		);
	}
}
