import {
	QueryRunner,
	getManager,
	getRepository,
	Repository,
	createQueryBuilder
} from "typeorm";
import { sign, verify } from "jsonwebtoken";
import { UserAccountEntity } from "../entity/user/UserAccountEntity";
import { generateToken } from "../../utilities";
import { UserProfileEntity } from "../entity/user/UserProfileEntity";

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

	/**
	 * Trả về UserProfile
	 * @param  {string} token - token chứa id của UserAccount
	 * @returns Promise<UserProfile>
	 */
	getByAccountToken = (token: string): Promise<UserProfileEntity> => {
		if (!token) return null;
		const result = verify(
			token,
			process.env.JSON_WEB_TOKEN_SECRET!
		);
		return createQueryBuilder(UserProfileEntity, "profile")
			.leftJoinAndSelect("profile.userAccount", "userAccount")
			.select(["profile.id", "userAccount.id"])
			.where("userAccount.id=:userAccountId", {
				userAccountId: (result as any).id
			})
			.getOne();
	};
	/**
	 * Trả về UserProfile
	 * @param  {string} token - token chứa id của UserProfile
	 * @returns Promise<UserProfile>
	 */
	getByProfileToken = (token: string): Promise<UserProfileEntity> => {
		if (!token) return null;
		const result = verify(
			token,
			process.env.JSON_WEB_TOKEN_SECRET!
		);
		return createQueryBuilder(UserProfileEntity, "profile")
			.leftJoinAndSelect("profile.userAccount", "userAccount")
			.select(["profile.id", "userAccount.id"])
			.where("userAccount.id=:userAccountId", {
				userAccountId: (result as any).id
			})
			.getOne();
	};
	/**
	 * Tạo token chứa id của UserProfile
	 * @param  {string | null} token - token chứa id của UserAccount
	 * @returns Promise<string>
	 */
	createToken = async (token: string | null): Promise<string> => {
		const userProfile = await this.getByAccountToken(token);
		return generateToken(userProfile.id);
	};

	getByEmail(email: string) {
		return getManager().findOne(UserProfileEntity, {
			where: { email }
		});
	}

	create(
		userProfileCreateInput: UserProfileCreateInput,
		queryRunner?: QueryRunner
	) {
		const newUserProfile = getManager().create(UserProfileEntity, {
			...userProfileCreateInput
		});
		if (typeof queryRunner === undefined) {
			return getManager().save(newUserProfile);
		}
		return queryRunner.manager.save(newUserProfile);
	}
	findById(id: string) {
		return getManager().findOne(UserProfileEntity, id);
	}
}

interface UserAccountCreateInput {
	email: string;
	password: string;
	passwordSalt: string;
	passwordHashAlgorithm: string;
	registrationTime: Date;
	emailConfirmationToken: string;
	userProfile: UserProfileEntity;
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

	createToken = (id: string | number) => {
		return generateToken(id);
	};

	create(
		userAccountCreateInput: UserAccountCreateInput,
		queryRunner?: QueryRunner
	) {
		const userAccount = getManager().create(UserAccountEntity, {
			...userAccountCreateInput
		});
		if (typeof queryRunner === undefined) {
			return getManager().save(userAccount);
		}
		return queryRunner.manager.save(userAccount);
	}
	getByEmail(email: string) {
		return getManager().findOne(UserAccountEntity, {
			where: { email }
		});
	}

	setEmailConfirmed(email: string) {
		return getManager().update(
			UserAccountEntity,
			{ email },
			{ emailConfirmationToken: null }
		);
	}
}
