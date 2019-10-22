import 'reflect-metadata';

import { Collections } from './schema/collections';
import { dbConnect } from './database';
import express from 'express';
import { getApolloServer } from './apollo-server';
import path from 'path';

const setupExpress = () => {
	const app = express();

	/**
	 * Cài đặt Template Engine EJS
	 */
	app.set('view engine', 'ejs');
	app.set('views', path.join(__dirname, 'views'));

	return app;
};

const startServer = async () => {
	const apolloServer = await getApolloServer();

	const app = setupExpress();

	app.get('/confirm-email', async (req, res) => {
		const { email, token } = req.query;

		const db = await dbConnect();
		const result = await db
			.collection(Collections.Users)
			.findOne({ email });

		if (!result) {
			return res.send('Tài khoản không tồn tại');
		}
		if (!result.confirmToken) {
			return res.send(
				'Tài khoản đã được kích hoạt'
			);
		}

		const isMatchToken = token === result.confirmToken;

		if (isMatchToken) {
			try {
				await db
					.collection(
						Collections.Users
					)
					.updateOne(
						{
							email
						},
						{
							$unset: {
								confirmToken:
									''
							}
						}
					);
			} catch (error) {
				return res.send(error);
			}

			return res.render('confirm');
		}
		return res.send('Mã xác thực không chính xác');
	});

	apolloServer.applyMiddleware({ app });

	app.listen({ port: process.env.PORT }, () => {
		console.log('server started');
	});
};

startServer();
