import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloGateway } from '@apollo/gateway';

const port = process.env.PORT;
const app = express();

const services = (process.env.WAIT_HOSTS as string).split(',');
console.log('services', services);
const gateway = new ApolloGateway({
	serviceList: services.map(service => ({
		name: service.trim(),
		url: `http://${service.trim()}/graphql`
	}))
});

const server = new ApolloServer({
	gateway,
	subscriptions: false,
});

server.applyMiddleware({ app });

app.listen({ port }, () => console.log(`Server is listening on port ${port}`));
