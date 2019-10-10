import { Resolvers, User } from '../generated/graphql';
import { genSalt, hash } from 'bcryptjs';
import { send, setApiKey } from '@sendgrid/mail';

import { ApolloServer } from 'apollo-server-express';
import { dbConnect } from '../database';
import { typeDefs } from "./type-def"

setApiKey(process.env.SENDGRID_API_KEY!);
const msg = {
	to: 'igh65907@eveav.com',
	from: 'sub88483@eveav.com',
	subject: 'Sending with Twilio SendGrid is Fun',
	text: 'and easy to do anywhere, even with Node.js',
		html: '<strong>and easy to do anywhere, even with Node.js</strong>'
};
const sendEmail = async () => {
	try {
		const result = await send(msg);
		console.log('result', result);
	} catch (error) {
		console.log('error', error);
	}
};
	
// sendEmail();



const resolvers: Resolvers = {
	User: {
		id: parent => {
			// Fix _id return with MongoDB
			return (parent as any)._id;
		}
	},
	Query: {
		users: async (_, __, { dbClient }) => {
			return dbClient
				.collection<User>('users')
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
			const salt = await genSalt();
			const hashPassword = await hash(
				password,
				salt
			);

			const result = await dbClient
				.collection('users')
				.insertOne({
					email,
					name,
					password: hashPassword,
					course
				});

			return result.ops[0];
		}
	}
};

export const getApolloServer = async () => {
	const dbClient = await dbConnect();
	return new ApolloServer({
		typeDefs,
		// @ts-ignore
		resolvers,
		playground:true,
		context: () => {
			return { dbClient };
		}
	});
};
