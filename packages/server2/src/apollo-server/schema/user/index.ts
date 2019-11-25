import { Resolvers, Roles, User } from "../../../generated/graphql";
import {
	UserAccountController,
	UserProfileController
} from "../../../database/controller/UserController";
import { compare, genSalt, hash } from "bcryptjs";
import { send, setApiKey } from "@sendgrid/mail";
import { sign, verify } from "jsonwebtoken";

import { Collections } from "../collections";
import { getConnection } from "typeorm";
import typeDefs from "./schema";

export default typeDefs;

export const resolvers: Resolvers = {
	User: {
		id: parent => {
			if (!parent.id) {
				// Fix _id return with MongoDB
				return (parent as any)._id;
			}
			return parent.id;
		}
	},
	Query: {
		currentUser: async (_, __, { token }) => {
			if (!token) return null;
			const result = verify(token, process.env.TOKEN_SECRET!);

			const existingUser = await UserProfileController.getInstance().findById(
				(result as any).id
			);

			if (!existingUser) {
				return null;
			}
			return {
				token: generateToken(existingUser.id),
				user: existingUser
			};
		},

		users: async (_, __, { dbClient }) => {
			return dbClient
				.collection<User>(Collections.Users)
				.find()
				.toArray();
		}
	},
	Mutation: {
		register: async (_, { name, email, password, course }, { dbClient }) => {
			const userProfileController = UserProfileController.getInstance();
			const userAccountController = UserAccountController.getInstance();
			/**
			 * Kiểm tra dữ liệu đầu vào
			 */
			if (password.length < 6) {
				throw new Error("Mật khẩu phải có độ dài tối thiểu 6 kí tự");
			}

			/**
			 * Kiểm tra Email đã được đăng kí chưa
			 */
			const existingUserProfile = await userProfileController.getByEmail(email);
			if (existingUserProfile) {
				throw new Error("Email đã được đăng kí");
			}

			try {
				/**
				 * Hash password
				 */
				const hashPassword = await hash(password, 10);

				const salt = await genSalt();

				/**
				 * Tạo mã xác thực để gửi Email
				 */
				const emailConfirmationToken = await hash(email, salt);

				/**
				 * Lưu vào database
				 */

				const queryRunner = getConnection().createQueryRunner();
				await queryRunner.connect();
				await queryRunner.startTransaction();
				try {
					const userProfile = await userProfileController.create(
						{
							email,
							fullName: name
						},
						queryRunner
					);

					await userAccountController.create(
						{
							email,
							emailConfirmationToken,
							password: hashPassword,
							passwordSalt: salt,
							passwordHashAlgorithm: "OpenBSD",
							registrationTime: new Date(),
							userProfile
						},
						queryRunner
					);
					await queryRunner.commitTransaction();
				} catch (error) {
					await queryRunner.rollbackTransaction();
					throw new Error(error);
				} finally {
					await queryRunner.release();
				}

				/**
				 * Gửi email xác thực
				 */
				setApiKey(process.env.SENDGRID_API_KEY!);

				const link = `${process.env.SERVER_HOST}/user/confirm-email?email=${email}&token=${emailConfirmationToken}`;
				const msg = {
					to: email,
					from: "no-reply@mandevices.com",
					subject: "Xác thực tài khoản",
					text: "and easy to do anywhere, even with Node.js",
					html: `<div>Click <a href="${link}">vào đây</a> để xác thực tài khoản </div>`
				};

				await send(msg);
				/**
				 * Done
				 */
				return true;
			} catch (error) {
				throw new Error(error);
			}
		},
		login: async (_, { email, password }, { dbClient }) => {
			const userAccountController = UserAccountController.getInstance();
			/**
			 * Kiểm tra tài khoản có tồn tại
			 */
			const existingUserAccount = await userAccountController.getByEmail(email);
			if (!existingUserAccount) {
				throw new Error("Tài khoản không tồn tại");
			}

			/**
			 * Kiểm tra tài khoản đã được kích hoạt
			 */
			if (existingUserAccount.emailConfirmationToken) {
				throw new Error(
					"Tài khoản chưa được kích hoạt! Hãy xác thực Email để kích hoạt tài khoản"
				);
			}

			/**
			 * Kiểm tra mật khẩu
			 */

			const isMatchPassword = await compare(
				password,
				(existingUserAccount as any).password
			);
			if (!isMatchPassword) {
				throw new Error("Mật khẩu không đúng");
			}

			/**
			 * Tạo token chứa id và roles
			 */
			const token = generateToken(existingUserAccount.id);

			return {
				token
			};
		},

		facebookLogin: async (_, { name, email, avatar }, { dbClient }) => {
			const existingUser = await dbClient
				.collection("users")
				.findOne({ email });

			if (existingUser) {
				return {
					token: sign(
						{
							id: existingUser._id
						},
						process.env.TOKEN_SECRET!
					),
					user: existingUser
				};
			}
			try {
				const newUser = (
					await dbClient.collection("users").insertOne({
						email,
						name,
						roles: [Roles.User],
						avatar
					})
				).ops[0];
				return {
					token: generateToken(newUser._id),
					user: newUser
				};
			} catch (error) {
				throw new Error(error);
			}
		}
	}
};

const generateToken = (id: String | number) => {
	return sign(
		{
			id
			// roles
		},
		process.env.TOKEN_SECRET!
	);
};
