import { UserAccountController } from "../../../database/controller/UserController";
import { compare, genSalt, hash } from "bcryptjs";
import { send, setApiKey } from "@sendgrid/mail";
import { sign, verify } from "jsonwebtoken";
import typeDefs from "./schema";

export default typeDefs;

export const resolvers = {

	User: {
		firstName: parent => {
			if (!parent.fullName)
				throw new Error("fullName is undefined");
			const fullNameArray = parent.fullName.split(" ");
			return fullNameArray[fullNameArray.length - 1];
		},
		checked:async (parent,_,{loaders:{userLoader}})=>{
		const result = await userLoader.load((parent as any).id)
		console.log('result in resolvers :', result[0]);
		if(result[0].emailConfirmationToken){
			return false
		}else{
			return true;
		}
		
		}
	},
	Query: {
		user: (_,{where}) => {
			return UserAccountController.getInstance().getById(where.id)
		},
		currentUser: async (_, __, { token }, info) => {
			if (!token) return null;
			const result = verify(
				token,
				process.env.JSON_WEB_TOKEN_SECRET!
			);
			const userAccountController = UserAccountController.getInstance();
			const authInfo = await userAccountController.getById(
				(result as any).id
			);
			console.log("authInfo :", authInfo);
			return {
				token: userAccountController.createToken(authInfo.id),
				user:authInfo};
		},

		users: async (_, __, ___, info) => {
			const userController = UserAccountController.getInstance();
			const result = await userController.getAll(info);
			return result;
		}
	},
	Mutation: {
		register: async (_, { fullName, email, password }) => {
			const userAccountController = UserAccountController.getInstance();

			/**
			 * Kiểm tra dữ liệu đầu vào
			 */
			if (password.length < 6) {
				throw new Error(
					"Mật khẩu phải có độ dài tối thiểu 6 kí tự"
				);
			}

			/**
			 * Kiểm tra Email đã được đăng kí chưa
			 */
			const existingUserProfile = await userAccountController.getByEmail(
				email
			);
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
				const emailConfirmationToken = await hash(
					email,
					salt
				);

				/**
				 * Lưu vào database
				 */

				try {
					await userAccountController.create({
						email,
						emailConfirmationToken,
						password: hashPassword,
						fullName
					});
				} catch (error) {
					throw new Error(error);
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
					text:
						"and easy to do anywhere, even with Node.js",
					html: `<div>Click <a href="${link}">vào đây</a> để xác thực tài khoản </div>`
				};
				try {
					await send(msg);
				} catch (error) {
					throw new Error(error);
				}

				/**
				 * Done
				 */
				return true;
			} catch (error) {
				throw new Error(error);
			}
		},
		login: async (_, { email, password }) => {
			const userAccountController = UserAccountController.getInstance();
			/**
			 * Kiểm tra tài khoản có tồn tại
			 */
			const existingUserAccount = await userAccountController.getByEmail(
				email,
				"emailConfirmationToken",
				"password",
				"fullName"
			);
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
			 * Trả về token chứa id của userAccount
			 */
			const token = userAccountController.createToken(
				existingUserAccount.id
			)

			return {
				token ,
				user: existingUserAccount
			};
		},

		facebookLogin: async (_, { name, email, avatar }) => {
			// const existingUser = await dbClient
			// 	.collection("users")
			// 	.findOne({ email });

			// if (existingUser) {
			// 	return {
			// 		token: sign(
			// 			{
			// 				id: existingUser._id
			// 			},
			// 			process.env
			// 				.JSON_WEB_TOKEN_SECRET!
			// 		),
			// 		user: existingUser
			// 	};
			// }
			// try {
			// 	const newUser = (
			// 		await dbClient
			// 			.collection("users")
			// 			.insertOne({
			// 				email,
			// 				name,
			// 				roles: [Roles.User],
			// 				avatar
			// 			})
			// 	).ops[0];
			// 	return {
			// 		token: generateToken(newUser._id),
			// 		user: newUser
			// 	};
			// } catch (error) {
			// 	throw new Error(error);
			// }
			return null;
		},
		updateUser: async (_, { where, data }, __, info) => {
			console.log("where,data :", where, data);
			const userController = UserAccountController.getInstance();

			return userController.update(where, data, info);
		}
	}
};

const generateToken = (id: String | number) => {
	return sign(
		{
			id
		},
		process.env.JSON_WEB_TOKEN_SECRET!
	);
};
