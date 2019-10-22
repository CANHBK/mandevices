import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { TOKEN } from 'App';
import gql from 'graphql-tag';
import { onError } from 'apollo-link-error';
import { setContext } from 'apollo-link-context';

const typeDefs = gql`
	extend type Query {
		isLogin: Boolean
	}
`;

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
			uri: 'http://localhost:5000/graphql'
		})
	]),
	cache: new InMemoryCache(),
	typeDefs,
	connectToDevTools: true
});

client.writeData({ data: { isLogin: false } });
