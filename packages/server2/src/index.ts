import 'reflect-metadata';

import express from 'express';
import { getApolloServer } from './apollo-server';

const main = async () => {
	const apolloServer = await getApolloServer();

	const app = express();

	apolloServer.applyMiddleware({ app });

	app.listen({ port: process.env.PORT || 5000 }, () => {
		console.log('server started');
	});
};

main();
