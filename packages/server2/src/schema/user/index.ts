import { Resolvers, User } from '../../generated/graphql';
import { compare, hash } from 'bcryptjs';
import { send, setApiKey } from '@sendgrid/mail';
import { sign, verify } from 'jsonwebtoken';

import { Collections } from '../collections';
import { ObjectId } from 'bson';
import typeDefs from './schema';

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
		currentUser: async (_, __, { dbClient, token }) => {
			if (!token) return null;
			const result = verify(
				token,
				process.env.TOKEN_SECRET!
			);
			console.log('result', result);
			const existingUser = await dbClient
				.collection(Collections.Users)
				.findOne({
					_id: new ObjectId(
						(result as any).id
					)
				});
			if (!existingUser) {
				return null;
			}
			return {
				token: generateToken(
					existingUser._id
				),
				user: existingUser
			};
		},

		users: async (_, __, { dbClient }) => {
			return dbClient
				.collection<User>(
					Collections.Users
				)
				.find()
				.toArray();
		}
	},
	Mutation: {
		register: async (
			_,
			{ name, email, password, course },
			{ dbClient }
		) => {
			/**
			 * Kiểm tra Email đã được đăng kí chưa
			 */
			const existingEmail = await dbClient
				.collection<User>('users')
				.findOne({
					email
				});
			if (existingEmail) {
				throw new Error(
					'Email đã được đăng kí'
				);
			}
			if (password.length < 6) {
				throw new Error(
					'Mật khẩu phải có độ dài tối thiểu 6 kí tự'
				);
			}
			try {
				const hashPassword = await hash(
					password,
					10
				);

				const confirmToken = await hash(
					email,
					10
				);

				await dbClient
					.collection(
						Collections.Users
					)
					.insertOne({
						email,
						name,
						password: hashPassword,
						course,
						confirmToken
					});

				setApiKey(
					process.env
						.SENDGRID_API_KEY!
				);

				const link = `${process.env.SERVER_HOST}:${process.env.PORT}/confirm-email?email=${email}&token=${confirmToken}`;
				const msg = {
					to: email,
					from:
						'no-reply@mandevices.com',
					subject:
						'Xác thực tài khoản',
					text:
						'and easy to do anywhere, even with Node.js',
					html: `<div>Click <a href="${link}">vào đây</a> để xác thực tài khoản </div>`
				};

				await send(msg);

				return true;
			} catch (error) {
				throw new Error(error);
			}
		},
		login: async (_, { email, password }, { dbClient }) => {
			/**
			 * Kiểm tra tài khoản có tồn tại
			 */
			const existingUser = await dbClient
				.collection(Collections.Users)
				.findOne({ email });
			if (!existingUser) {
				throw new Error(
					'Tài khoản không tồn tại'
				);
			}

			/**
			 * Kiểm tra tài khoản đã được kích hoạt
			 */
			if (existingUser.confirmToken) {
				throw new Error(
					'Tài khoản chưa được kích hoạt! Hãy xác thực Email để kích hoạt tài khoản'
				);
			}

			/**
			 * Kiểm tra mật khẩu
			 */

			const isMatchPassword = await compare(
				password,
				(existingUser as any).password
			);
			if (!isMatchPassword) {
				throw new Error(
					'Mật khẩu không đúng'
				);
			}
			return {
				user: existingUser,
				token: generateToken(
					existingUser._id
				)
			};
		},

		facebookLogin: async (
			_,
			{ name, email, avatar },
			{ dbClient }
		) => {
			const existingUser = await dbClient
				.collection('users')
				.findOne({ email });

			if (existingUser) {
				return {
					token: sign(
						{
							id:
								existingUser._id
						},
						process
							.env
							.TOKEN_SECRET!
					),
					user: existingUser
				};
			}
			try {
				const newUser = (await dbClient
					.collection<User>(
						'users'
					)
					.insertOne({
						email,
						name,
						avatar
					})).ops[0];
				return {
					token: generateToken(
						newUser._id
					),
					user: newUser
				};
			} catch (error) {
				throw new Error(error);
			}
		}
	}
};

const generateToken = (id: String) => {
	return sign(
		{
			id
		},
		process.env.TOKEN_SECRET!
	);
};
