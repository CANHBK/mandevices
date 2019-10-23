import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Resolvers } from 'generated/apollo-react-hook.generated';
import { TOKEN } from 'App';
import gql from 'graphql-tag';
import { onError } from 'apollo-link-error';
import { setContext } from 'apollo-link-context';

const typeDefs = gql`
	extend type Query {
		isLogin: Boolean
	}

	extend type Mutation {
		logout: Boolean
	}
`;

const resolvers: Resolvers = {
	Mutation: {
		logout: (_, __, { client }) => {
			localStorage.removeItem(TOKEN);
			client.resetStore();
			return true;
		}
	}
};

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem(TOKEN);
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `${token}` : ''
		}
	};
});

export const client = new ApolloClient({
	link: ApolloLink.from([
		onError(({ graphQLErrors, networkError }) => {
			if (graphQLErrors)
				graphQLErrors.forEach(
					({
						message,
						locations,
						path
					}) =>
						console.log(
							`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
						)
				);
			if (networkError)
				console.log(
					`[Network error]: ${networkError}`
				);
		}),
		authLink,
		new HttpLink({
			uri: process.env.REACT_APP_SERVER_URL
		})
	]),
	cache: new InMemoryCache(),
	typeDefs,
	// @ts-ignore
	resolvers,
	connectToDevTools: true
});

client.writeData({ data: { isLogin: false } });
